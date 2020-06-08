import { useContext } from 'react'
import { UserState } from '../States/UserState';
import { ConnectionManager } from './ConnectionManager';
import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';

export class UserManger {

    static instance;

    constructor(backendData) {
        if (UserManger.instance) {
            return UserManger.instance;
        }
        UserManger.instance = this;
        this._backendData = backendData

        this._setPoints = useContext(PointsContext).setPoints
        this._setGPPS = useContext(GPPSContext).setGPPS
        this._connectionManager = new ConnectionManager(this._backendData)
        this._user = { ...UserState }
    }
    logedIn() {
        return this._user.LogedIn
    }
    login(username, password) {
        return this._connectionManager.getToken(username, password).then(token => {
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

    _buildConnection(token) {
        this._connectionManager.connectWebSockets(token)
        const tmpSetGPPS = this._setGPPS
        const tmpSetPoints = this._setPoints
        const gPPSEvent = function (event) {
            tmpSetGPPS(JSON.parse(event.data)["points"])
        }
        const pointEvent = function (event) {
            tmpSetPoints(JSON.parse(event.data)["points"])
        }
        this._connectionManager.addEvents(gPPSEvent, pointEvent)
        this._connectionManager.updateGenerators()
    }

    logout() {
        this._connectionManager.disconnect()
        this._user = { ...UserState }
        this._setPoints(0)
        this._setGPPS(0)
        return new Promise(() =>"")
    }

    click(){
        const clickEndpoind = this._connectionManager.getConnection("Click") 
        if (clickEndpoind!== null){
            clickEndpoind.send("")
        }
    }

    updateGenerators(){
        this._connectionManager.updateGenerators()
    }
}

