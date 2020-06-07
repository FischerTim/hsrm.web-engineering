import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col, Form } from 'react-bootstrap';

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';
import { ConnectionContext } from '../Context/ConnectionContext';
import { ConnectionServiceContext } from '../Context/ConnectionServiceContext';
import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { GeneratorServiceContext } from '../Context/GeneratorServiceContext';
import { GeneratorsContext } from '../Context/GeneratorsContext';

export function CorePage() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const { userService } = useContext(UserServiceContext)
    const { ressourcen } = useContext(RessourcenContext)
    const { connectionService } = useContext(ConnectionServiceContext)
    const { connection, setConnection } = useContext(ConnectionContext)
    const { generatorService } = useContext(GeneratorServiceContext)
    const { generators, setGenerators } = useContext(GeneratorsContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)

    if (!user.LogedIn) {
        pathHistory.push(ressourcen.Path.Login)
    }

    const logout = () => {

        setUser(userService.logout())
        setConnection(connectionService.disconnected(connection))
        generatorService.getGenerators(null).then(NewGenerator => {
            setGenerators(NewGenerator)
        })
        pathHistory.push(ressourcen.Path.Login)

    }
    const newClick = () => {
        if (connection.Click != null && connection.Click.readyState === 1) {
            connection.Click.send("")
        }
    }

    //---------------- Test Space Start ---------------- 



    const gen = () => {
        if (user.LogedIn) {
            generatorService.getGenerators(user.Token).then(NewGenerator => {
                setGenerators(NewGenerator)
            })
        }
    }

    //---------------- Test Space Ende ---------------- 

    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1>{ressourcen.LoginData.Points} {points}</h1>
                    <p>
                    {ressourcen.LoginData.PointsPC} {gPPS}
                    </p><br />
                    <p>
                        <Button variant="success">{ressourcen.LoginData.ClickButton}</Button>
                    </p>
                </Jumbotron><br />
                <Button variant="primary" onClick={gen}>{ressourcen.LoginData.Generators}</Button>
                <GeneratorList generatorsList={generators} /><br />
                <Button variant="danger" onClick={logout}>Logout</Button><br /><br />
            </Container>
        </div>
    )
}
