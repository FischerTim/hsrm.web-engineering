import { useContext } from 'react'
import { UserState } from '../States/UserState';
import { ConnectionService } from './ConnectionService';
import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';

export class UserService {

    static instance;

    constructor(serverRessource) {
        if (UserService.instance) {
            return UserService.instance;
        }
        UserService.instance = this;
        this._serverRessource = serverRessource

        this._setPoints = useContext(PointsContext).setPoints
        this._setGPPS = useContext(GPPSContext).setGPPS
        this._connectionService = new ConnectionService(this._serverRessource)
        this._user = { ...UserState }
    }
    logedIn() {
        return this._user.LogedIn
    }
    login(username, password) {
        return this._connectionService.getToken(username, password).then(token => {
            const newUser = { ...UserState }
            if (token != null) {
                newUser.LogedIn = true
                newUser.Token = token
                newUser.Username = username
                this._user = newUser
                this._buildConnection(token)
            } else {
                this._user = newUser
            }
            return
        })

    }
    register(username, password) {
        return this._connectionService.register(username, password).then(() => {
            return this.login(username, password)
        })
    }

    _buildConnection(token) {
        this._connectionService.connectWebSockets(token)
        const tmpSetGPPS = this._setGPPS
        const tmpSetPoints = this._setPoints
        const gPPSEvent = function (event) {
            tmpSetGPPS(JSON.parse(event.data)["points"])
        }
        const pointEvent = function (event) {
            tmpSetPoints(JSON.parse(event.data)["points"])
        }
        this._connectionService.addEvents(gPPSEvent, pointEvent)
        this._connectionService.updateGenerators()
        this._connectionService.updateUpdates()
    }

    logout() {
        this._connectionService.disconnect()
        this._user = { ...UserState }
        this._setPoints(0)
        this._setGPPS(0)
        return new Promise(() => "")
    }

    click() {
        const clickEndpoind = this._connectionService.getConnection("Click")
        if (clickEndpoind !== null) {
            clickEndpoind.send("")
        }
    }

    updateGenerators() {
        this._connectionService.updateGenerators()
    }
    updateUpdates() {
        this._connectionService.updateUpdates()
    }
}

