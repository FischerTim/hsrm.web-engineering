import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';
import { GeneratorList } from '../Components/Generator/GeneratorList';
import { GeneratorsContext } from '../Context/GeneratorsContext';
import { Ressources } from '../Services/Ressources';
import { UserManger } from '../Services/UserManger';

export function CorePage() {

    const pathHistory = useHistory()

    const { generators } = useContext(GeneratorsContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)

    const ressources = new Ressources().get()
    const userManger = new UserManger(ressources.Backend)

    if (!userManger.logedIn()) {
        pathHistory.push(ressources.Path.Login)
    }

    const logout = () => {
        userManger.logout()
            .then(pathHistory.push(ressources.Path.Login))
            .catch()
    }

    const updateGenerators = () => {
        userManger.updateGenerators()
    }

    const pointclick = () => {
        userManger.click()
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
