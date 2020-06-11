import React from 'react'

import { LanguageRessources,Languages } from '../../Ressourcen/LanguageRessource'
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

    return (<div>
        <select id="languageSelector" onChange={onLanguageChanged} value={ressourceService._language}>
            {languageList}
        </select>
    </div>)
}