import { ConnectionState } from '../States/ConnectionState'
import { GeneratorState, GeneratorsState } from '../States/GeneratorState';
import { useContext } from 'react';
import { GeneratorsContext } from '../Context/GeneratorsContext';

export class ConnectionService {
    static instance;

    constructor(serverRessource) {
        if (ConnectionService.instance) {
            return ConnectionService.instance;
        }
        ConnectionService.instance = this;
        this._serverRessource = serverRessource
        this._currentConnections = { ...ConnectionState }
        this._setGenerators = useContext(GeneratorsContext).setGenerators
    }

    getToken(username, password) {
        const method = 'POST'
        const header = { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded' }
        const body = JSON.stringify(`&username=${username}&password=${password}&`)
        const url = `${this._serverRessource.HttpPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}${this._serverRessource.Endpoint.Token}`
        return fetch(url, { method: method, headers: header, body: body, })
            .then(response => response.json())
            .then(data => { return data.access_token })
    }
    
    register(username, password) {
        const method = 'POST'
        const header = { "Accept": "application/json", "Content-Type": 'application/json' }
        const body = `{\"username\":\"${username}\",\"password\":\"${password}\"}`
        const url = `${this._serverRessource.HttpPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}${this._serverRessource.Endpoint.Register}`
        return fetch(url, { method: method, headers: header, body: body, })
    }

    connectWebSockets(token) {
        this._token = token
        this._disconnectWebSocket()
        const newSocketConnections = { ...ConnectionState }
        if (token !== undefined) {
            newSocketConnections.Click = new WebSocket(`${this._serverRessource.SocketPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}${this._serverRessource.BasePath}${this._serverRessource.Endpoint.Click}?${this._serverRessource.AuthentificationParam}=${token}`)
            newSocketConnections.Points = new WebSocket(`${this._serverRessource.SocketPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}${this._serverRessource.BasePath}${this._serverRessource.Endpoint.CurrentClicks}?${this._serverRessource.AuthentificationParam}=${token}`)
            newSocketConnections.GPPS = new WebSocket(`${this._serverRessource.SocketPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}${this._serverRessource.BasePath}${this._serverRessource.Endpoint.GPPS}?${this._serverRessource.AuthentificationParam}=${token}`)
        }
        this._currentConnections = newSocketConnections
    }

    addEvents(gPPSEvent, pointEvent) {
        if (this._token) {
            this._currentConnections.Points.addEventListener('message', pointEvent);
            this._currentConnections.GPPS.addEventListener('message', gPPSEvent);
        }

    }

    updateGenerators() {

        if (this._token !== null) {
            const header = { method: 'GET', headers: { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded', "Authorization": `Bearer ${this._token}` } }
            const baseServerPath = `${this._serverRessource.HttpPrefix}${this._serverRessource.ServerAdresse}:${this._serverRessource.Port}`
            const url = `${baseServerPath}${this._serverRessource.Endpoint.Generators.Available}`

            const newGenerators = { ...GeneratorsState }
            fetch(url, header)
                .then(response => response.json())
                .then(availableGenerators => {
                    for (var i = 0; i < availableGenerators.length; i++) {
                        const currentId = availableGenerators[i].id
                        const url = `${baseServerPath}/generators/${currentId}${this._serverRessource.Endpoint.Generators.Buy}`
                        const buyFunction = (update) => {
                            fetch(url, header)
                        }
                        newGenerators[currentId] = {
                            ...GeneratorState,
                            Income_rate: availableGenerators[i].income_rate,
                            Id: currentId,
                            Buy: buyFunction
                        }
                        if (i === availableGenerators.length - 1) {
                            const url = `${baseServerPath}/generators/${currentId}${this._serverRessource.Endpoint.Generators.PriceOf}`
                            return fetch(url, header)
                                .then(response => response.json())
                                .then(priceOfGen => {
                                    newGenerators[currentId].Price = priceOfGen
                                    const url = `${baseServerPath}${this._serverRessource.Endpoint.Generators.Owned}`
                                    return fetch(url, header)
                                        .then(response => response.json())
                                        .then(ownedGenerators => {
                                            for (var j = 0; j < ownedGenerators.length; j++) {
                                                const currentId = ownedGenerators[j].generator.id
                                                newGenerators[currentId].Amount = ownedGenerators[j].amount
                                            }
                                        })
                                })
                        } else {
                            const url = `${baseServerPath}/generators/${currentId}${this._serverRessource.Endpoint.Generators.PriceOf}`
                            fetch(url, header)
                                .then(response => response.json())
                                .then(priceOfGen => {
                                    newGenerators[currentId].Price = priceOfGen

                                })
                        }

                    }

                }).then(() => {
                    this._setGenerators(newGenerators)
                })
        }

    }
    disconnect() {
        this._disconnectWebSocket()
        this._disconnectGenerators()
        this._token = null
    }
    _disconnectGenerators() {
        const newGenerators = { ...GeneratorsState }
        this._setGenerators(newGenerators)
    }

    getConnection(connectionKey) {
        return this._currentConnections[connectionKey]
    }

    _disconnectWebSocket() {
        for (const connection in this._currentConnections) {
            if (this._currentConnections[connection] !== null) {
                this._currentConnections[connection].close()
            }
        }
    }

}