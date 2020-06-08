import { ConnectionState } from '../States/ConnectionState'
import { GeneratorBaseState, GeneratorsState } from '../States/GeneratorState';
import { useContext } from 'react';
import { GeneratorsContext } from '../Context/GeneratorsContext';

export class ConnectionManager {
    static instance;

    constructor(backendData) {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance;
        }
        ConnectionManager.instance = this;
        this._backendData = backendData
        this._currentConnections = { ...ConnectionState }
        this._setGenerators = useContext(GeneratorsContext).setGenerators
    }

    getToken(username, password) {
        const method = 'POST'
        const header = { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded' }
        const body = JSON.stringify(`&username=${username}&password=${password}&`)
        const url = `${this._backendData.HttpPrefix}${this._backendData.ServerAdresse}:${this._backendData.Port}${this._backendData.Endpoint.Token}`
        return fetch(url, { method: method, headers: header, body: body, })
            .then(response => response.json())
            .then(data => { return data.access_token })
    }

    connectWebSockets(token) {
        this._token = token
        this._disconnectWebSocket()
        const newSocketConnections = { ...ConnectionState }
        if (token !== undefined) {
            newSocketConnections.Click = new WebSocket(`${this._backendData.SocketPrefix}${this._backendData.ServerAdresse}:${this._backendData.Port}${this._backendData.BasePath}${this._backendData.Endpoint.Click}?${this._backendData.AuthentificationParam}=${token}`)
            newSocketConnections.Points = new WebSocket(`${this._backendData.SocketPrefix}${this._backendData.ServerAdresse}:${this._backendData.Port}${this._backendData.BasePath}${this._backendData.Endpoint.CurrentClicks}?${this._backendData.AuthentificationParam}=${token}`)
            newSocketConnections.GPPS = new WebSocket(`${this._backendData.SocketPrefix}${this._backendData.ServerAdresse}:${this._backendData.Port}${this._backendData.BasePath}${this._backendData.Endpoint.GPPS}?${this._backendData.AuthentificationParam}=${token}`)
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
            const baseServerPath = `${this._backendData.HttpPrefix}${this._backendData.ServerAdresse}:${this._backendData.Port}`
            const url = `${baseServerPath}${this._backendData.Endpoint.Generators.Available}`

            const newGenerators = { ...GeneratorsState }
            fetch(url, header)
                .then(response => response.json())
                .then(availableGenerators => {
                    for (var i = 0; i < availableGenerators.length; i++) {
                        const currentId = availableGenerators[i].id
                        const url = `${baseServerPath}/generators/${currentId}${this._backendData.Endpoint.Generators.Buy}`
                        const buyFunction = (update) => {
                            fetch(url, header)
                        }
                        newGenerators[currentId] = {
                            ...GeneratorBaseState,
                            Income_rate: availableGenerators[i].income_rate,
                            Id: currentId,
                            Buy: buyFunction
                        }
                        if (i === availableGenerators.length - 1) {
                            const url = `${baseServerPath}/generators/${currentId}${this._backendData.Endpoint.Generators.PriceOf}`
                            return fetch(url, header)
                                .then(response => response.json())
                                .then(priceOfGen => {
                                    newGenerators[currentId].Price = priceOfGen
                                    const url = `${baseServerPath}${this._backendData.Endpoint.Generators.Owned}`
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
                            const url = `${baseServerPath}/generators/${currentId}${this._backendData.Endpoint.Generators.PriceOf}`
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