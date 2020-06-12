import React, { useState, createContext } from 'react'

import { LanguageRessources, Languages } from '../Ressourcen/LanguageRessource'
import { RessourceState } from '../States/RessourceState'

export const RessourcenContext = createContext()
export const RessourcenContextProvider = ({ children }) => {
    const initValue = { ...RessourceState }
    initValue.Login = LanguageRessources[Languages.DEFAULT].LoginRessource
    initValue.Register = LanguageRessources[Languages.DEFAULT].RegisterRessource
    initValue.Core = LanguageRessources[Languages.DEFAULT].CorePageRessource
    initValue.Language = LanguageRessources[Languages.DEFAULT].LanguageRessource
    const [ressourcen, setRessourcen] = useState(initValue)
    const ressourcenValue = { ressourcen, setRessourcen }

    return (
        <RessourcenContext.Provider value={ressourcenValue}>
            {children}
        </RessourcenContext.Provider>
    )
}