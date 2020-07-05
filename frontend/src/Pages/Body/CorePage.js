
import React, { useContext, useState } from 'react'

import { Jumbotron, Button, Container, Row, Col, Image, Table } from 'react-bootstrap';

import { PointsContext } from '../../Context/Statistics/PointsContext';
import { GPPSContext } from '../../Context/Statistics/GPPSContext';
import { GeneratorsContext } from '../../Context/Lists/GeneratorsContext';
import { UpdatesContext } from '../../Context/Lists/UpdatesContext';
import { UserContext } from '../../Context/UserContext';
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';

import GeneratorList from '../../Components/Generator/GeneratorList';
import UpdateList from '../../Components/Update/UpdateList';

import { UserService } from '../../Services/UserService';

import { SlideAnimation } from '../../Components/Animation/SlideAnimation';

export function CorePage() {

    const { generators, setGenerators } = useContext(GeneratorsContext)
    const { updates, setUpdates } = useContext(UpdatesContext)
    const { user } = useContext(UserContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)
    const { ressources } = useContext(RessourcesContext)
    const [disableClick, setDisableClick] = useState(true)
    const [animationList, setAnimationList] = useState([])

    const isClickConnected = (con) => {
        if (con != null) {
            if (con.readyState === 1) {
                if (disableClick === true) {
                    setDisableClick(false)
                }
                return true
            }
        }
        if (disableClick === false) {
            setDisableClick(true)
        }
        return false

    }
    isClickConnected(user.Connections.Click)

    const updateGenerators = async () => {
        try {

            const newGeneratorList = await UserService.getGenerators(user.Token)
            setGenerators(await newGeneratorList)

            //update upgrades 
            updateUpgrades()

        } catch (error) {
            //TODO error handling
        }
    }



    const updateUpgrades = async () => {
        try {

            const newupgradeList = await UserService.getUpgrades(user.Token)
            setUpdates(await newupgradeList)

        } catch (error) {
            //TODO error handling
        }

    }
    const pointclick = () => {

        if (isClickConnected(user.Connections.Click)) {
            user.Connections.Click.send("")


            animationList.push(<SlideAnimation path={ressources.Game.ImagePath.UpdatePath + updates.SelectImage + ".png"} key={Date.now()}></SlideAnimation>)
            var newAnimationList = [...animationList]
            setAnimationList(newAnimationList)


            // TODO KLICKT!!!!!!!!!
        }
    }

    return (
        <div>
            <br /><br />
            <Container >
                <Row>
                    <Col>
                        <GeneratorList points={points} onBuyHook={updateGenerators} generatorsList={generators} gameRessources={ressources.Game} />
                    </Col>
                    <Col xs={5}>

                            <Jumbotron className="text-center">
                                <h1>{points}</h1>
                                {ressources.Game.Points}<br />

                                <h6 className="text-center">{ressources.Game.CPSText} {gPPS}</h6>
                            </Jumbotron><br />
     
                            <Image src={ressources.Game.ImagePath.UpdatePath + updates.SelectImage + ".png"} fluid />
                    </Col>
                    <Col>
                        <UpdateList points={points} onBuyHook={updateUpgrades} updatesList={updates} gameRessources={ressources.Game} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {animationList}
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Image src={ressources.Game.ImagePath.GeneratorPath + generators.SelectImage + ".png"} fluid />
                    </Col>
                </Row>
                <Row>
                    <Button variant="secondary" size="lg" block disabled={disableClick} onClick={pointclick}>{ressources.Game.ClickButtonText}</Button>
                </Row>

            </Container>
        </div>
    )
} 