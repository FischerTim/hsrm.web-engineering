import { UserState } from '../States/UserState';
import { ConnectionService } from './ConnectionService';


export class UserService {

    static login(username, password) {
        return ConnectionService.getToken(username, password)
    }

    static getUserObject(username, token, logedIn) {
       
        const newUser = { ...UserState }
        newUser.LogedIn = logedIn
        newUser.Token = token
        newUser.Username = username
        return newUser
    }

    static async register(username, password) {
        return ConnectionService.register(username, password)
    }

    static async getGenerators(token) {
        return ConnectionService.getGenerators(token)
    }

    static async getUpgrades(token) {
        return ConnectionService.getUpgrades(token)
    }

    static disconnect(connections){
        ConnectionService.disconnectWebSocket(connections) 
    }
}
