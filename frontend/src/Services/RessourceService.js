import { Paths } from "../Resources/PathResource"
import { Server } from "../Resources/ServerResource"
export class RessourceService {
   
    constructor(language){
        this._path = Paths
        this._server = Server
        this._language = language
        this._login = this._language.LoginData
        this._register = this._language.RegisterData
    }

    getChangedLanguageRessource(newLanguage){
        return new RessourceService(newLanguage)
    }

    Path(){
        return this._path
    }
    Login(){
        return this._login
    }
    Register(){
        return this._register
    }
    Server(){
        return this._server
    }   

    
}