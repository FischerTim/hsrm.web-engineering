import React, { useState, createContext } from 'react'

import { RessourcenService } from '../Services/RessourcenService'

export const RessourcenServiceContext = createContext()
export const RessourcenServiceContextProvider = ({ children }) => {

    const [ressourcenService] = useState(new RessourcenService())
    const ressourcenServiceValue = { ressourcenService }

    return (
        <RessourcenServiceContext.Provider value={ressourcenServiceValue}>
            {children}
        </RessourcenServiceContext.Provider>
    )
}