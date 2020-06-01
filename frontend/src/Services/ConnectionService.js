import { ConnectionState } from '../States/ConnectionState'
export class ConnectionService {

    constructor(serverRessourcen){
        this._serverRessourcen = serverRessourcen
    }
    getConnection(user) {
        const tmpConnectionState = {...ConnectionState}
        console.log(tmpConnectionState)
        const tmpConnection = new WebSocket(`${this._serverRessourcen.SocketPrefix}${this._serverRessourcen.ServerAdresse}:${this._serverRessourcen.Port}${this._serverRessourcen.BasePath}${this._serverRessourcen.Endpoint.Click}?${this._serverRessourcen.AuthentificationParam}=${user.Token}`)
        console.log(tmpConnection)
        tmpConnectionState.Click = tmpConnection
        return tmpConnectionState
    }
    disconnected(){
        const tmpConnectionState = {...ConnectionState}
        return tmpConnectionState
    }

}