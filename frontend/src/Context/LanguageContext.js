import React, { useState, createContext } from 'react'

import { LanguageState } from '../States/LanguageState'

export const LanguageContext = createContext()
export const LanguageContextProvider = ({ children }) => {

    const [language, setLanguage] = useState(LanguageState.DEFAULT)
    const languageValue = { language, setLanguage }

    return (
        <LanguageContext.Provider value={languageValue}>
            {children}
        </LanguageContext.Provider>
    )
}