import React, { useState, createContext } from 'react'

import { Languages } from '../../Ressources/LanguageRessource'
import { Games } from '../../Ressources/GameRessource'
import { RessourceService } from '../../Services/RessourceService'

export const RessourcesContext = createContext()
export const RessourcesContextProvider = ({ children }) => {
    const [ressources, setRessources] = useState(RessourceService.getUpdatedRessource(Languages.DEFAULT, Games.DEFAULT))
    const ressourcesValue = { ressources, setRessources }

    return (
        <RessourcesContext.Provider value={ressourcesValue}>
            {children}
        </RessourcesContext.Provider>
    )
}