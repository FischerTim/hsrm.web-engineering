import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { GeneratorsContext } from '../Context/GeneratorsContext';
import { RessourceService } from '../Services/RessourceService';
import { UserService } from '../Services/UserService';

export function CorePage() {

    const pathHistory = useHistory()

    const { generators } = useContext(GeneratorsContext)
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
    }

    const pointclick = () => {
        userService.click()
    }

    return (
        <div>
            <label>{points}</label> <br></br>
            <label>{gPPS}</label>

            <button onClick={pointclick}>click mich pls</button>
            <button onClick={logout}>logout</button>


            <GeneratorList points={points} onBuy={updateGenerators} generatorsList={generators} />
        </div>
    )
}
