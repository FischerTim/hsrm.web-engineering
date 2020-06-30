import React from 'react'

export default function GameOption({ gameId, gameRepresentation }) {
    return (<option value={gameId}>{gameRepresentation}</option>)
}