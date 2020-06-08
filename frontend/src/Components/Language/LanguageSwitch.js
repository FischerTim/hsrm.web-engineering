import React from 'react'

import { LanguageRessourcen } from '../../Ressourcen/LanguageRessourcen'
import { LanguageOption } from './LanguageOption'
import { Languages } from '../../States/LanguageState'

export function LanguageSwitch({ ressources }) {

    const languageList = []

    for (const e in LanguageRessourcen) {
        languageList.push(<LanguageOption
            key={LanguageRessourcen[e].LanguageData.Id}
            LanguageId={LanguageRessourcen[e].LanguageData.Id}
            LanguageRepresentation={LanguageRessourcen[e].LanguageData.Repressentation} />)
    }

    const onLanguageChanged = (e) => {
        const key = e.target.value

        if (Languages[key] !== undefined) {
            ressources.setLanguage(Languages[key])
        }
    }

    return (<div>
        <select id="languageSelector" onChange={onLanguageChanged} value={ressources._language}>
            {languageList}
        </select>
    </div>)
}