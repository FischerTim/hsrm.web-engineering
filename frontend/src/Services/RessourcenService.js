import { RessourcenState } from '../States/RessourcenState'

import { Languages } from '../Ressourcen/LanguageRessourcen'

export class RessourcenService {

    getRessourcen(languageState) {
        RessourcenState.LoginData = Languages[languageState].LoginData
        RessourcenState.RegisterData = Languages[languageState].RegisterData
        return RessourcenState

    }

}