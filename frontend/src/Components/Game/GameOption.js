import React from 'react'

export function GameOption({ gameId, gameRepresentation }) {
    return (<option value={gameId}>{gameRepresentation}</option>)
}