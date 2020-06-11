import React  from 'react'
import { Navbar, Form, Nav, NavDropdown, Button } from 'react-bootstrap';

import { LanguageRessources,Languages } from '../../Ressourcen/LanguageRessource'
import { LanguageOption } from './LanguageOption'

export function LanguageSwitch({ ressourceService }) {

    const languageList = []
    
    const ressoures = ressourceService.get()
    for (const e in LanguageRessources) {
        languageList.push(<LanguageOption
            key={LanguageRessources[e].LanguageRessource.Id}
            LanguageId={LanguageRessources[e].LanguageRessource.Id}
            LanguageRepresentation={LanguageRessources[e].LanguageRessource.Repressentation} />)
    }

    const onLanguageChanged = (e) => {
        const key = e.target.value

        if (Languages[key] !== undefined) {
            ressourceService.setLanguage(Languages[key])
        }
    }
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
                <NavDropdown title={ressourceService._language} id="basic-nav-dropdown" onClick={onLanguageChanged}>
                    <NavDropdown.Item >{languageList}</NavDropdown.Item>
                </NavDropdown>
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}