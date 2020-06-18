import React, { useState, createContext } from 'react'

import { Games } from '../../Ressources/GameRessource'

export const GameContext = createContext()
export const GameContextProvider = ({ children }) => {
    const [game, setGame] = useState(Games.DEFAULT)
    const gameValue = { game, setGame }

    return (
        <GameContext.Provider value={gameValue}>
            {children}
        </GameContext.Provider>
    )
}