import React from 'react'
import { NavDropdown } from 'react-bootstrap';

import { GameOption } from './GameOption'
import { Games, GameRessources } from '../../Ressources/GameRessource';

export function GameSwitch({ game , language, updateGame }) {

    const GameList = []
    const gmRssrcs = GameRessources[language]
    for (const e in gmRssrcs) {
        GameList.push(<GameOption
            key={e}
            gameId={e}
            gameRepresentation={gmRssrcs[e].GameRessource.Repressentation} />)
    }

    const onGameChanged = (e) => {
        const key = e.target.value
        if (Games[key] !== undefined) {
            updateGame(Games[key])
        }
    }

    return (
        <NavDropdown title={game} id="basic-nav-dropdown" onClick={onGameChanged} alignRight>
            <NavDropdown.Item >{GameList}</NavDropdown.Item>
        </NavDropdown>
    )
}