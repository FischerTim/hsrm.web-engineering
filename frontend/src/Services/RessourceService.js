import { useContext } from 'react';
import { LanguageRessources,Languages } from '../Ressourcen/LanguageRessource';
import { RessourcenContext } from '../Context/RessourcenContext';
import { RessourceState } from '../States/RessourceState';

export class RessourceService {

    static instance;

    constructor() {
        if (RessourceService.instance) {
            return RessourceService.instance;
        }

        RessourceService.instance = this;

        this._language = Languages.DEFAULT
        this._setRessourcen = useContext(RessourcenContext).setRessourcen
    }

    _updateRessource() {
        const newRessource = { ...RessourceState }
        newRessource.Login = LanguageRessources[this._language].LoginRessource
        newRessource.Register = LanguageRessources[this._language].RegisterRessource
        newRessource.Core = LanguageRessources[this._language].CorePageRessource
        newRessource.Language = LanguageRessources[this._language].LanguageRessource
        this._setRessourcen(newRessource)
    }

    get() {
        return useContext(RessourcenContext).ressourcen
    }

    setLanguage(newLanguage) {
        if (Languages[newLanguage] !== undefined) {
            this._language = newLanguage
            this._updateRessource()
        } else {
            //TODO Exception
        }
    }
}

