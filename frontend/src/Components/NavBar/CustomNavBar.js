import React, { useContext } from 'react'
import { Form, Navbar, Nav, Button } from 'react-bootstrap';

import { LanguageSwitch } from '../Language/LanguageSwitch'
import { GameSwitch } from '../Game/GameSwitch';
import { UserContext } from '../../Context/UserContext';
import { LanguageContext } from '../../Context/Ressource/LanguageContext';
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';
import { GameContext } from '../../Context/Ressource/GameContext';
import { RessourceService } from '../../Services/RessourceService';

export function CustomNavBar() {

    const { user } = useContext(UserContext)
    const { language, setLanguage } = useContext(LanguageContext)
    const { game, setGame } = useContext(GameContext)
    const { ressources, setRessources } = useContext(RessourcesContext)


    let buttonText = ''
    let buttonColor = ''

    if (!user.LogedIn) {
        buttonText = ressources.Login.LoginButton
        buttonColor = 'primary'
    } else {
        buttonText = ressources.Core.LogoutButton
        buttonColor = 'danger'
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


    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Web-Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <Button variant={buttonColor} type="submit">
                    {buttonText}
                </Button>
                <LanguageSwitch updateLanguage={updateLanguage} language={language} />
                <GameSwitch language={language} updateGame={updateGame} game={game} />
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}