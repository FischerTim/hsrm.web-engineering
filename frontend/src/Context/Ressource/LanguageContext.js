import React, { useState, createContext } from 'react'

import { Languages } from '../../Ressources/LanguageRessource'
export const LanguageContext = createContext()
export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(Languages.DEFAULT)
    const languageValue = { language, setLanguage }

    return (
        <LanguageContext.Provider value={languageValue}>
            {children}
        </LanguageContext.Provider>
    )
}