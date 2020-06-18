import { ConnectionState } from '../States/ConnectionState'
import { GeneratorState, GeneratorsState } from '../States/GeneratorState';
import { UpdateState, UpdatesState } from '../States/UpdateState';
import { ServerRessource } from '../Ressources/ServerRessource'
export class ConnectionService0 {
    static serverRessource = { ...ServerRessource }


    static getToken(username, password) {
        const method = 'POST'
        const headers = { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded' }
        const body = JSON.stringify(`&username=${username}&password=${password}&`)
        const url = `${ConnectionService0.serverRessource.HttpPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}${ConnectionService0.serverRessource.Endpoint.Token}`
        return fetch(url, { method, headers, body, })
            .then((response) => {
                if (!response.ok) {
                    throw new Error()
                } else {
                    return response.json()
                }
            })
    }

    static register(username, password) {
        const method = 'POST'
        const headers = { "Accept": "application/json", "Content-Type": 'application/json' }
        const body = `{"username":"${username}","password":"${password}"}`
        const url = `${ConnectionService0.serverRessource.HttpPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}${ConnectionService0.serverRessource.Endpoint.Register}`
        return fetch(url, { method, headers, body, })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error()
                    } else {
                        return response.json()
                    }
                })
    }

    static getConnectedSockets(token) {
        const newSocketConnections = { ...ConnectionState }
        if (token !== undefined) {
            newSocketConnections.Click = new WebSocket(`${ConnectionService0.serverRessource.SocketPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}${ConnectionService0.serverRessource.BasePath}${ConnectionService0.serverRessource.Endpoint.Click}?${ConnectionService0.serverRessource.AuthentificationParam}=${token}`)
            newSocketConnections.Points = new WebSocket(`${ConnectionService0.serverRessource.SocketPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}${ConnectionService0.serverRessource.BasePath}${ConnectionService0.serverRessource.Endpoint.CurrentClicks}?${ConnectionService0.serverRessource.AuthentificationParam}=${token}`)
            newSocketConnections.GPPS = new WebSocket(`${ConnectionService0.serverRessource.SocketPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}${ConnectionService0.serverRessource.BasePath}${ConnectionService0.serverRessource.Endpoint.GPPS}?${ConnectionService0.serverRessource.AuthentificationParam}=${token}`)
        }
        return newSocketConnections

    }

    static addEventsToSockets(connection, gPPSEvent, pointEvent) {
        connection.Points.addEventListener('message', pointEvent);
        connection.GPPS.addEventListener('message', gPPSEvent);
    }

    static getUpgrades(token) {
        const method = 'GET'
        const headers = { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded', "Authorization": `Bearer ${token}` }
        const requestInfos = { method, headers }
        const baseServerPath = `${ConnectionService0.serverRessource.HttpPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}`

        // set url for next request
        const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Updates.Available}`
        const newUpdates = { ...UpdatesState }

        return fetch(url, requestInfos)
            .then(response => response.json())
            .then(availableUpdates => {

                for (var i = 0; i < availableUpdates.length; i++) {

                    const currentId = availableUpdates[i].id

                    // set url for next request
                    const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Updates.Base}/${currentId}${ConnectionService0.serverRessource.Endpoint.Updates.Buy}`
                    const buyFunction = (update) => { fetch(url, requestInfos) }

                    // set infos for upgrade with current id
                    newUpdates[currentId] = {
                        ...UpdateState,
                        Multiplier: availableUpdates[i].multiplier,
                        Id: currentId,
                        Price: availableUpdates[i].cost,
                        Bought: false,
                        Buy: buyFunction
                    }
                }

                // set url for next request
                const nextUrl = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Updates.Owned}`

                return fetch(nextUrl, requestInfos)
                    .then(response => response.json())
                    .then(ownedUpdates => {

                        for (var i = 0; i < ownedUpdates.length; i++) {

                            const currentId = ownedUpdates[i].upgrade.id

                            // set url for next request
                            newUpdates[currentId] = {
                                ...UpdateState,
                                Multiplier: ownedUpdates[i].upgrade.multiplier,
                                Id: currentId,
                                Price: ownedUpdates[i].upgrade.cost,
                                Bought: true,
                                Buy: null
                            }

                            if (newUpdates.SelectImage < currentId) {
                                newUpdates.SelectImage = currentId
                            }
                        }
                        return newUpdates
                    })
            })
    }

    static getGenerators(token) {
        const method = 'GET'
        const headers = { "Accept": "application/json", "Content-Type": 'application/x-www-form-urlencoded', "Authorization": `Bearer ${token}` }
        const requestInfos = { method, headers }
        const baseServerPath = `${ConnectionService0.serverRessource.HttpPrefix}${ConnectionService0.serverRessource.ServerAdresse}:${ConnectionService0.serverRessource.Port}`

        // set url for next request
        const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Generators.Available}`
        const newGenerators = { ...GeneratorsState }

        // return newGenerators
        return fetch(url, requestInfos)
            .then(response => response.json())
            .then(availableGenerators => {

                for (var i = 0; i < availableGenerators.length; i++) {

                    const currentId = availableGenerators[i].id

                    // set url for next request
                    const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Generators.Base}/${currentId}${ConnectionService0.serverRessource.Endpoint.Generators.Buy}`
                    const buyFunction = (update) => { fetch(url, requestInfos) }

                    // set infos for generator with current id
                    newGenerators[currentId] = {
                        ...GeneratorState,
                        Income_rate: availableGenerators[i].income_rate,
                        Id: currentId,
                        Buy: buyFunction
                    }

                    if (i === availableGenerators.length - 1) {

                        // set url for next request
                        const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Generators.Base}/${currentId}${ConnectionService0.serverRessource.Endpoint.Generators.PriceOf}`

                        return fetch(url, requestInfos)
                            .then(response => response.json())
                            .then(priceOfGen => {

                                // set price for generator with current id
                                newGenerators[currentId].Price = priceOfGen

                                // set url for next request
                                const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Generators.Owned}`

                                return fetch(url, requestInfos)
                                    .then(response => response.json())
                                    .then(ownedGenerators => {

                                        for (var j = 0; j < ownedGenerators.length; j++) {

                                            const currentId = ownedGenerators[j].generator.id

                                            // set amount for generator with current id
                                            newGenerators[currentId].Amount = ownedGenerators[j].amount
                                        }
                                        return newGenerators
                                    })
                            })

                    } else {
                        // set url for next request
                        const url = `${baseServerPath}${ConnectionService0.serverRessource.Endpoint.Generators.Base}/${currentId}${ConnectionService0.serverRessource.Endpoint.Generators.PriceOf}`


                        fetch(url, requestInfos)
                            .then(response => response.json())
                            .then(priceOfGen => {

                                // set price for generator with current id
                                newGenerators[currentId].Price = priceOfGen

                            })
                    }

                }

            })
    }


}
