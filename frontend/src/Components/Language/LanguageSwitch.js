import React from 'react'

import { Navbar, Form, Nav, NavDropdown } from 'react-bootstrap';

import { Languages } from '../../Ressourcen/LanguageRessourcen'
import { LanguageOption } from './LanguageOption'
import { LanguageState } from '../../States/LanguageState'

export function LanguageSwitch({ ressourcenService, setRessourcen, language, setLanguage }) {

    const languageList = []

    for (const e in Languages) {
        languageList.push(<LanguageOption
            key={Languages[e].LanguageData.Id}
            LanguageId={Languages[e].LanguageData.Id}
            LanguageRepresentation={Languages[e].LanguageData.Repressentation} />)
    }

    const onLanguageChanged = (e) => {
        const key = e.target.value

        if (LanguageState[key] !== undefined) {
            setLanguage(LanguageState[key])

            setRessourcen(ressourcenService.getRessourcen(LanguageState[key]))
        }
    }

    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Web-Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <select id="languageSelector" onChange={onLanguageChanged} value={language}>
                    {languageList}
                </select>
            </Nav>
            <Form inline>
                <NavDropdown title={language} id="basic-nav-dropdown" onChange={onLanguageChanged}>
                    {languageList}
                </NavDropdown>
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}