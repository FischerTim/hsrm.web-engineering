import { UserState } from '../States/UserState';
import { ConnectionService0 } from './ConnectionService0';


export class UserService0 {

    static instance;

    static login(username, password) {
        return ConnectionService0.getToken(username, password)
    }

    static getUserObject(username, token, logedIn) {
        const newUser = { ...UserState }
        newUser.LogedIn = true
        newUser.Token = token
        newUser.Username = username
        return newUser
    }

    static async register(username, password) {
        return ConnectionService0.register(username, password)
    }

    static async getGenerators(token) {
        return ConnectionService0.getGenerators(token)
    }

    static async getUpgrades(token) {
        return ConnectionService0.getUpgrades(token)
    }

}
