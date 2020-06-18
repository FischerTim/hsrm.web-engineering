import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';

import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { UpdateList } from '../Components/Update/UpdateList';
import { GeneratorsContext } from '../Context/GeneratorsContext';
import { RessourceService } from '../Services/RessourceService';
import { UpdatesContext } from '../Context/UpdatesContext';
import { UserContext } from '../Context/UserContext';
import { ConnectionService0 } from '../Services/ConnectionService0';
import { UserService0 } from '../Services/UserService0';


export function CorePage() {

    const pathHistory = useHistory()

    const { generators, setGenerators } = useContext(GeneratorsContext)
    const { updates, setUpdates } = useContext(UpdatesContext)
    const { user, setUser } = useContext(UserContext)
    const { points, setPoints } = useContext(PointsContext)
    const { gPPS, setGPPS } = useContext(GPPSContext)

    const ressourceService = new RessourceService()
    const ressources = ressourceService.get()
    //const userService = new UserService(ressources.Server)

    // Prohibit page for users not logged in
    if (!user.LogedIn) {
        pathHistory.push(ressources.Path.Login)
    }

    const updateGenerators = async () => {
        try {

            const newGeneratorList = await UserService0.getGenerators(user.Token)
            setGenerators(await newGeneratorList)

            //update upgrades 
            updateUpgrades()

        } catch (error) {
            //TODO error handling
        }
    }

    const updateUpgrades = async () => {
        try {

            const newupgradeList = await UserService0.getUpgrades(user.Token)
            setUpdates(await newupgradeList)

        } catch (error) {
            //TODO error handling
        }

    }

    const pointclick = () => {
        if (user.Connections.Click !== null) {
            user.Connections.Click.send("")
            // TODO KLICKT!!!!!!!!!
        } else {
            // TODO error handling 
        }
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
                        <UpdateList points={points} onBuyHook={updateUpgrades} updatesList={updates} gameRessources={ressources.Game} />
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
