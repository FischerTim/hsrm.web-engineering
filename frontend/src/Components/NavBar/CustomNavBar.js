import React from 'react'
import { Form, Navbar, Nav, Button } from 'react-bootstrap';

import { LanguageSwitch } from '../Language/LanguageSwitch'
import { UserService } from '../../Services/UserService';
import { GameSwitch } from '../Game/GameSwitch';

export function CustomNavBar({ ressourceService }) {

    const ressources = ressourceService.get()
    const userService = new UserService(ressources.Server)

    // TODO -> Global 

    let buttonText = ''
    let buttonColor = ''

    if (!userService.logedIn()) {
        buttonText = ressources.Login.LoginButton
        buttonColor = 'primary'
    } else {
        buttonText = ressources.Core.LogoutButton
        buttonColor = 'danger'
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
                <LanguageSwitch ressourceService={ressourceService} />
                <GameSwitch ressourceService={ressourceService} />
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}