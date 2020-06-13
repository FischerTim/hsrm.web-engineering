import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';

import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { UpdateList } from '../Components/Update/UpdateList';
import { GeneratorsContext } from '../Context/GeneratorsContext';
import { RessourceService } from '../Services/RessourceService';
import { UserService } from '../Services/UserService';
import { UpdatesContext } from '../Context/UpdatesContext';
import { Games } from '../Ressourcen/GameRessource';

export function CorePage() {

    const pathHistory = useHistory()

    const { generators } = useContext(GeneratorsContext)
    const { updates } = useContext(UpdatesContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)
    const ressourceService = new RessourceService()
    const ressources = ressourceService.get()
    const userService = new UserService(ressources.Server)

    if (!userService.logedIn()) {
        pathHistory.push(ressources.Path.Login)
    }

    /*
    const logout = () => {
        userService.logout()
            .then(pathHistory.push(ressources.Path.Login))
            .catch()
    }
    */

    const updateGenerators = () => {
        userService.updateGenerators()
        updateUpdates()
    }
    const updateUpdates = () => {
        userService.updateUpdates()
    }

    const pointclick = () => {
        userService.click()
    }
    return (
        <div>
            <br /><br />
            <Container>
                <Row>
                    <Col>
                        <GeneratorList points={points} onBuyHook={updateGenerators} generatorsList={generators} gameRessources={ressources.Game} />
                    </Col>
                    <Col xs={5}>
                        <Jumbotron className="text-center">
                            <h1>{points}</h1>
                            {ressources.Core.Points}<br />
                        </Jumbotron><br />
                        <Image src={ressources.Game.ImagePath + "/Image" + updates.SelectImage + ".png"} thumbnail />
                    </Col>
                    <Col>
                        <UpdateList points={points} onBuyHook={updateUpdates} updatesList={updates} gameRessources={ressources.Game} />
                    </Col>
                </Row>
                <br /><br />
                <p>
                    <Button variant="secondary" size="lg" block onClick={pointclick}>{ressources.Core.ClickButton}</Button>
                </p>
                <h6 className="text-center">{ressources.Core.PointsPC} {gPPS}</h6>
            </Container>
        </div>
    )
}
