import { UserState } from '../States/UserState'

export class UserService {

    constructor(serverData) {
        this._serverData = serverData
    }

    login(username, password) {
        return fetch(`http://${this._serverData.ServerAdresse}:${this._serverData.Port}${this._serverData.Endpoint.Token}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(`&username=${username}&password=${password}&`),
        }).then(response => response.json())
            .then(data => {
                
                const user = { ...UserState }
                if (data.access_token != null) {
                    user.LogedIn = true
                    user.Token = data.access_token
                    user.Username = username
                }
                return user

            })
    }

    logout() {
        return UserState
    }

}