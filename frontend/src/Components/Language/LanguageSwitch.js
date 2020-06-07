import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Navbar, Form, Nav, NavDropdown, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { RessourcenContext } from '../../Context/RessourcenContext';

import { Languages } from '../../Ressourcen/LanguageRessourcen'
import { LanguageOption } from './LanguageOption'
import { LanguageState } from '../../States/LanguageState'

export function LanguageSwitch({ ressourcenService, setRessourcen, language, setLanguage }) {

    const { register, handleSubmit, errors } = useForm();
    const { ressourcen } = useContext(RessourcenContext)

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

    return (<Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Web-Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <Button variant="primary" type="submit">
                    {ressourcen.LoginData.LoginButton}
                </Button>
                <NavDropdown title={language} id="basic-nav-dropdown" onClick={onLanguageChanged}>
                    <NavDropdown.Item >{languageList}</NavDropdown.Item>
                </NavDropdown>
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}