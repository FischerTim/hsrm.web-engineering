import { Languages } from '../States/LanguageState';
import { useContext } from 'react';
import { LanguageRessourcen } from '../Ressourcen/LanguageRessourcen';
import { RessourcenContext } from '../Context/RessourcenContext';
import { RessourcenState } from '../States/RessourcenState';

export class Ressources {

    static instance;

    constructor() {
        if (Ressources.instance) {
            return Ressources.instance;
        }

        Ressources.instance = this;

        this._language = Languages.DEFAULT
        this._setRessourcen = useContext(RessourcenContext).setRessourcen
    }

    _updateRessource() {
        const newRessource = { ...RessourcenState }
        newRessource.LoginData = LanguageRessourcen[this._language].LoginData
        newRessource.RegisterData = LanguageRessourcen[this._language].RegisterData
        newRessource.LanguageData = LanguageRessourcen[this._language].LanguageData
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

