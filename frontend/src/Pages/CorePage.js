import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { UpdateList } from '../Components/Update/UpdateList';
import { GeneratorsContext } from '../Context/GeneratorsContext';
import { RessourceService } from '../Services/RessourceService';
import { UserService } from '../Services/UserService';
import { UpdatesContext } from '../Context/UpdatesContext';

export function CorePage() {

    const pathHistory = useHistory()

    const { generators } = useContext(GeneratorsContext)
    const { updates } = useContext(UpdatesContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)
    const ressources = new RessourceService().get()
    const userService = new UserService(ressources.Server)

    if (!userService.logedIn()) {
        pathHistory.push(ressources.Path.Login)
    }

    const logout = () => {
        userService.logout()
            .then(pathHistory.push(ressources.Path.Login))
            .catch()
    }

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
                        <GeneratorList points={points} onBuy={updateGenerators} generatorsList={generators} gameRessources={ressources.Game} />
                    </Col>
                    <Col xs={5}>
                        <Jumbotron className="text-center">
                            <h1>{points}</h1>
                            {ressources.Core.Points}<br />
                        </Jumbotron><br />
                        <h1 className="text-center">TESTBILD FOLGT</h1>
                    </Col>
                    <Col>
                        <UpdateList points={points} onBuy={updateUpdates} updatesList={updates} gameRessources={ressources.Game} />
                    </Col>
                </Row>
                <br /><br />
                <p>
                    <Button variant="secondary" size="lg" block onClick={pointclick}>{ressources.Core.ClickButton}</Button>
                </p>
                <h6 className="text-center">{ressources.Core.PointsPC} {gPPS}</h6>
                <Button variant="danger" onClick={logout}>Logout</Button><br /><br />
            </Container>
        </div>
    )
}
