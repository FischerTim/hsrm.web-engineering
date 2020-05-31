import React, { useState, createContext, useContext } from 'react'

import { RessourcenServiceContext } from './RessourcenServiceContext'
import { LanguageContext } from './LanguageContext'

export const RessourcenContext = createContext()
export const RessourcenContextProvider = ({ children }) => {

    const { ressourcenService } = useContext(RessourcenServiceContext)
    const { language } = useContext(LanguageContext)
    const [ressourcen, setRessourcen] = useState(ressourcenService.getRessourcen(language))
    const ressourcenValue = { ressourcen, setRessourcen }

    return (
        <RessourcenContext.Provider value={ressourcenValue}>
            {children}
        </RessourcenContext.Provider>
    )
}