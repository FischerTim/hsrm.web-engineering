import React, { useState, createContext } from 'react'

import { LanguageRessources, Languages } from '../Ressourcen/LanguageRessource'
import { RessourceState } from '../States/RessourceState'
import { GameRessources, Games } from '../Ressourcen/GameRessource'

export const RessourcenContext = createContext()
export const RessourcenContextProvider = ({ children }) => {
    const initValue = { ...RessourceState }
    initValue.Login = LanguageRessources[Languages.DEFAULT].LoginRessource
    initValue.Register = LanguageRessources[Languages.DEFAULT].RegisterRessource
    initValue.Core = LanguageRessources[Languages.DEFAULT].CorePageRessource
    initValue.Language = LanguageRessources[Languages.DEFAULT].LanguageRessource
    initValue.Game = GameRessources[Languages.DEFAULT][Games.DEFAULT]
    const [ressourcen, setRessourcen] = useState(initValue)
    const ressourcenValue = { ressourcen, setRessourcen }

    return (
        <RessourcenContext.Provider value={ressourcenValue}>
            {children}
        </RessourcenContext.Provider>
    )
}