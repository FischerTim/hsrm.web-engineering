import React from 'react'
import { NavDropdown } from 'react-bootstrap';

import { GameOption } from './GameOption'
import { Games, GameRessources } from '../../Ressourcen/GameRessource';

export function GameSwitch({ ressourceService }) {

    const GameList = []
    const gmRssrcs = GameRessources[ressourceService._language]
    for (const e in gmRssrcs) {
        GameList.push(<GameOption
            key={e}
            gameId={e}
            gameRepresentation={gmRssrcs[e].GameRessource.Repressentation} />)
    }

    const onGameChanged = (e) => {
        const key = e.target.value
        if (Games[key] !== undefined) {
            ressourceService.setGame(Games[key])
        }
    }

    return (
        <NavDropdown title={ressourceService._game} id="basic-nav-dropdown" onClick={onGameChanged} alignRight>
            {GameList.map((value, index) => {
                return <NavDropdown.Item key={index}>{value}</NavDropdown.Item>
            })}
        </NavDropdown>
    )
}