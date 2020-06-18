
import { LanguageRessources } from '../Ressources/LanguageRessource';
import { RessourceState } from '../States/RessourceState';
import { GameRessources } from '../Ressources/GameRessource';

export class RessourceService0 {

    static getUpdatedRessource(language, game) {
        const newRessource = { ...RessourceState }
        newRessource.Login = LanguageRessources[language].LoginRessource
        newRessource.Register = LanguageRessources[language].RegisterRessource
        newRessource.Core = LanguageRessources[language].CorePageRessource
        newRessource.Language = LanguageRessources[language].LanguageRessource
        newRessource.Game = GameRessources[language][game]
        return newRessource
    }
}

