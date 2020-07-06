import React, { useContext, useState } from 'react'
import $ from "jquery"

import { Jumbotron, Button, Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';

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

import ImageAnimation from '../../Components/Animation/ImageAnimation'

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


        }

        // TODO KLICKT!!!!!!!!!
        $('#egg-animation').removeClass().addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#egg-animation').removeClass();
        });
        $('#farm-animation').removeClass().addClass('animated wobble slow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#farm-animation').removeClass();
        });
    }

    const divStyle = {
        color: 'blue',
        backgroundImage: "url(" + "" + ")"
    };

    return (
        <div>
            <br />
            <Row>
                <Col md={2}>
                <br /><br />
                    <Accordion>
                        <Card>
                            <Card.Header className="text-center">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image width="100" className="rounded mx-auto d-block" src={ressources.Game.ImagePath.GeneratorPath + generators.SelectImage + ".png"} fluid />
                                        Klicke hier um alle Farmen zu sehen.
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <GeneratorList points={points} onBuyHook={updateGenerators} generatorsList={generators} gameRessources={ressources.Game} />
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>

                <Col md={8}>
                    <Container>
                        <Row>
                            <Col md={3}>

                            </Col>
                            <Col md={6}>
                                <Jumbotron className="text-center">
                                    <h4>{ressources.Game.Points}:</h4>
                                    <h1>{points}</h1>
                                    <br />

                                    <h6 className="text-center">{ressources.Game.CPSText} {gPPS}</h6>
                                </Jumbotron>
                            </Col>
                            <Col md={3}>

                            </Col>
                        </Row>
                    </Container>
                    
                    <br /><br /><br /><br />
                    <Row>
                        <Col md={1}>
                            <ImageAnimation width='300' className="rounded mx-auto d-block" path={ressources.Game.ImagePath.UpdatePath + updates.SelectImage + ".png"} id="egg-animation" />
                        </Col>
                        <Col md={6}>

                        </Col>
                        <Col md={1}>
                            {animationList}
                        </Col>
                        <Col md={4}>
                            <ImageAnimation width='350' path={ressources.Game.ImagePath.GeneratorPath + generators.SelectImage + ".png"} id="farm-animation" />
                        </Col>
                    </Row>

                    <Container>
                        <Row>
                            <Button variant="btn btn-secondary" size="lg" block disabled={disableClick} onClick={pointclick}>{ressources.Game.ClickButtonText}</Button>
                        </Row>
                    </Container><br /><br /><br />
                </Col>

                <Col md={2}>
                <br /><br />
                    <Accordion>
                        <Card>
                            <Card.Header className="text-center">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image width="100" className="rounded mx-auto d-block" src={ressources.Game.ImagePath.UpdatePath + updates.SelectImage + ".png"} fluid />
                                        Klicke hier um alle Eier zu sehen.
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <UpdateList points={points} onBuyHook={updateUpgrades} updatesList={updates} gameRessources={ressources.Game} />
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </div>
    )
}

//<h1 className="text-center">{ressources.Game.Generators.HeadText}</h1><br /><br />