import { RessourcenState } from '../States/RessourcenState'

import { Languages } from '../Ressourcen/LanguageRessourcen'

export class RessourcenService {

    getRessourcen(languageState) {
        const tmpRessourcenState = { ...RessourcenState }
        tmpRessourcenState.LoginData = Languages[languageState].LoginData
        tmpRessourcenState.RegisterData = Languages[languageState].RegisterData
        tmpRessourcenState.LanguageData = Languages[languageState].LanguageData
        return tmpRessourcenState

    }

}