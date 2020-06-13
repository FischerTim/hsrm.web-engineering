import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container} from 'react-bootstrap';

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
            <Container>
                <Jumbotron>
                    <h1>{ressources.Core.Points} {points}</h1>
                    <p>
                    {ressources.Core.PointsPC} {gPPS}
                    </p><br />
                    <p>
                        <Button variant="success" onClick={pointclick}>{ressources.Core.ClickButton}</Button>
                    </p>
                </Jumbotron><br />
                <GeneratorList points={points} onBuyHook={updateGenerators} generatorsList={generators} gameRessources={ressources.Game}/>
                <UpdateList points={points} onBuyHook={updateUpdates} updatesList={updates} gameRessources={ressources.Game}/> <br/>
                <Button variant="danger" onClick={logout}>Logout</Button><br /><br />
            </Container>
        </div>
    )
}
