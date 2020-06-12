import React from 'react'
import { NavDropdown } from 'react-bootstrap';

import { LanguageRessources, Languages } from '../../Ressourcen/LanguageRessource'
import { LanguageOption } from './LanguageOption'

export function LanguageSwitch({ ressourceService }) {

    const languageList = []
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

    return (
        <NavDropdown title={ressourceService._language} id="basic-nav-dropdown" onClick={onLanguageChanged}>
            <NavDropdown.Item >{languageList}</NavDropdown.Item>
        </NavDropdown>
    )
}