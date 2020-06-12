import React from 'react'
import { Form, Navbar, Nav, Button } from 'react-bootstrap';

import { LanguageSwitch } from '../Language/LanguageSwitch'

export function CustomNavBar({ ressourceService }) {

    const ressoures = ressourceService.get()

    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Web-Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <Button variant="primary" type="submit">
                    {ressoures.Login.LoginButton}
                </Button>
                <LanguageSwitch ressourceService={ressourceService} />
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}