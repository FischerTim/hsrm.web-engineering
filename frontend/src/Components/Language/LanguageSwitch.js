import React from 'react'
import { NavDropdown } from 'react-bootstrap';

import { LanguageRessources, Languages } from '../../Ressources/LanguageRessource'
import LanguageOption from './LanguageOption'

export default function LanguageSwitch({ language, updateLanguage }) {

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
            updateLanguage(Languages[key])
        }
    }

    return (
        <NavDropdown title={language} id="basic-nav-dropdown" onClick={onLanguageChanged} alignRight>
            {languageList.map((value, index) => {
                return <NavDropdown.Item id='switchItem' key={index}>{value}</NavDropdown.Item>
            })}

        </NavDropdown>
    )
}
