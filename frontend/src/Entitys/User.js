export class User{
    _username = null
    _token = null
    _isLogedIn = false
    _SERVER_ADDRESS = "server.bykovski.de"
    _LOGIN_PATH = "/users/token"

    getUsername(){
        return this._username
    }
    getToken(){
        return this._token
    }
    isLogedIn(){
        return this._isLogedIn
    }
    logout(){
        return new User()
    }
    login(username,password){
        return fetch(`http://${this._SERVER_ADDRESS}:8000${this._LOGIN_PATH}`, {
                    method: 'POST',
                    headers: {
                        "Accept" : "application/json"  ,
                        "Content-Type" : 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(`&username=${username}&password=${password}&`),
                }).then(response => response.json()).then(data => {

                    const newuser = this.logout()

                    this._token = data.access_token
                    
                    if (this._token != null ){
                        newuser._token = this._token
                        newuser.username = username
                        newuser._isLogedIn = true
                    }

                    return newuser
                })
    }
    

}