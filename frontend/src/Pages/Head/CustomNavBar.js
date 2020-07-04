import React, { useContext } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';

import LanguageSwitch from '../../Components/Language/LanguageSwitch'
import GameSwitch from '../../Components/Game/GameSwitch';
import { UserContext } from '../../Context/UserContext';
import { LanguageContext } from '../../Context/Ressource/LanguageContext';
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';
import { GameContext } from '../../Context/Ressource/GameContext';
import { RessourceService } from '../../Services/RessourceService';
import { useHistory } from 'react-router-dom';
import { UserService } from '../../Services/UserService';
import { GeneratorsContext } from '../../Context/Lists/GeneratorsContext';
import { UpdatesContext } from '../../Context/Lists/UpdatesContext';
import { PointsContext } from '../../Context/Statistics/PointsContext';
import { GPPSContext } from '../../Context/Statistics/GPPSContext';

import { useLocation } from 'react-router-dom';

export function CustomNavBar() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const { language, setLanguage } = useContext(LanguageContext)
    const { game, setGame } = useContext(GameContext)
    const { ressources, setRessources } = useContext(RessourcesContext)
    const { setPoints } = useContext(PointsContext)
    const { setGPPS } = useContext(GPPSContext)

    const { setGenerators } = useContext(GeneratorsContext)
    const { setUpdates } = useContext(UpdatesContext)

    var buttonText = ''
    var buttonColor = ''

    var location = useLocation();
    var currentPageState

    if (user.LogedIn) {
        currentPageState = "Core"
        buttonText = ressources.Core.LogoutButton
        buttonColor = ressources.Core.ButtonColor
    } else if (location.pathname === '/sign-up') {
        currentPageState = "Register"
        buttonText = ressources.Register.LoginButton
        buttonColor = ressources.Register.ButtonColor
    } else {
        currentPageState = "Login"
        buttonText = ressources.Login.RegisterButton
        buttonColor = ressources.Login.ButtonColor
    }

    const updateLanguage = (key) => {

        const newRessources = RessourceService.getUpdatedRessource(key, game)
        setRessources(newRessources)
        setLanguage(key)
    }
    const updateGame = (key) => {
        const newRessources = RessourceService.getUpdatedRessource(language, key)
        setRessources(newRessources)
        setGame(key)
    }

    const test = async () => {
        if (currentPageState === "Core") {
            try {

                // remove generators
                const newGeneratorList = await UserService.getGenerators(null)
                setGenerators(await newGeneratorList)

                // remove updates
                const newupgradeList = await UserService.getUpgrades(null)
                setUpdates(await newupgradeList)

                // disconnect sockets
                UserService.disconnect(user.Connections)

                // get empty user
                const newUser = UserService.getUserObject(null, null, false)

                // remove GPPS
                setGPPS(0)

                // remove points
                setPoints(0)

                // set user 
                setUser(newUser)

                pathHistory.push(ressources.Path.Login)

            } catch (e) {
                //TODO error handling !!!
                console.log(await e)
            }
        }else if(currentPageState === "Register"){
            pathHistory.push(ressources.Path.Login)
            
        }else if(currentPageState === "Login"){
            pathHistory.push(ressources.Path.Register)
        }
    }

    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Web-Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Button variant={buttonColor} onClick={test} type="submit">
                {buttonText}
            </Button>
            <LanguageSwitch updateLanguage={updateLanguage} language={language} />
            <GameSwitch language={language} updateGame={updateGame} game={game} />
        </Navbar.Collapse>
    </Navbar>)
}