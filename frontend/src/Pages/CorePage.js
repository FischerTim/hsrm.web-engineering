import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';
import { ConnectionContext } from '../Context/ConnectionContext';
import { ConnectionServiceContext } from '../Context/ConnectionServiceContext';
import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';

export function CorePage() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const { userService } = useContext(UserServiceContext)
    const { ressourcen } = useContext(RessourcenContext)
    const { connectionService } = useContext(ConnectionServiceContext)
    const { connection, setConnection } = useContext(ConnectionContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)

    if (!user.LogedIn) {
        pathHistory.push(ressourcen.Path.Login)
    }

    const logout = () => {

        setUser(userService.logout())
        setConnection(connectionService.disconnected(connection))
        pathHistory.push(ressourcen.Path.Login)

    }
    const oniwas = () => {
        if (connection.Click != null && connection.Click.readyState === 1) {
            connection.Click.send("")
        }
    }

    return (
        <div>
            <label>{points}</label> <br></br>
            <label>{gPPS}</label>
            <button onClick={oniwas}>click mich pls</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}
