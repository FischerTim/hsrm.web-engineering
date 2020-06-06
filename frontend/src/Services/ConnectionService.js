import { ConnectionState } from '../States/ConnectionState'
export class ConnectionService {

    constructor(serverRessourcen) {
        this._serverRessourcen = serverRessourcen
    }

    getConnection(user) {
        const tmpConnectionState = { ...ConnectionState }
        if (user !== null) {
            tmpConnectionState.Click = new WebSocket(`${this._serverRessourcen.SocketPrefix}${this._serverRessourcen.ServerAdresse}:${this._serverRessourcen.Port}${this._serverRessourcen.BasePath}${this._serverRessourcen.Endpoint.Click}?${this._serverRessourcen.AuthentificationParam}=${user.Token}`)
            tmpConnectionState.Points = new WebSocket(`${this._serverRessourcen.SocketPrefix}${this._serverRessourcen.ServerAdresse}:${this._serverRessourcen.Port}${this._serverRessourcen.BasePath}${this._serverRessourcen.Endpoint.CurrentClicks}?${this._serverRessourcen.AuthentificationParam}=${user.Token}`)
            tmpConnectionState.GPPS = new WebSocket(`${this._serverRessourcen.SocketPrefix}${this._serverRessourcen.ServerAdresse}:${this._serverRessourcen.Port}${this._serverRessourcen.BasePath}${this._serverRessourcen.Endpoint.GPPS}?${this._serverRessourcen.AuthentificationParam}=${user.Token}`)
        }
        return tmpConnectionState
    }



    disconnected(oldConnections) {
        for (const connection in oldConnections) {
            if (oldConnections[connection] !== null) {
                oldConnections[connection].close()
            }
        }
        const tmpConnectionState = { ...ConnectionState }
        return tmpConnectionState
    }

}