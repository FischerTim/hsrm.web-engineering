import React, { useState, createContext } from 'react'

import { Languages } from '../States/LanguageState'
import { LanguageRessourcen } from '../Ressourcen/LanguageRessourcen'
import { RessourcenState } from '../States/RessourcenState'

export const RessourcenContext = createContext()
export const RessourcenContextProvider = ({ children }) => {
    const initValue = { ...RessourcenState }
    initValue.LoginData = LanguageRessourcen[Languages.DEFAULT].LoginData
    initValue.RegisterData = LanguageRessourcen[Languages.DEFAULT].RegisterData
    initValue.LanguageData = LanguageRessourcen[Languages.DEFAULT].LanguageData
    const [ressourcen, setRessourcen] = useState(initValue)
    const ressourcenValue = { ressourcen, setRessourcen }

    return (
        <RessourcenContext.Provider value={ressourcenValue}>
            {children}
        </RessourcenContext.Provider>
    )
}