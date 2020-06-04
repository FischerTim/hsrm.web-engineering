import React from 'react'

import { Languages } from '../Ressourcen/LanguageRessourcen'
import { LanguageOption } from './LanguageOption'
import { LanguageState } from '../States/LanguageState'

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

    return (<div>
        <select id="languageSelector" onChange={onLanguageChanged} value={language}>
            {languageList}
        </select>
    </div>)
}