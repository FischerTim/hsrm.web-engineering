import React from 'react'

export function LanguageOption({ LanguageId, LanguageRepresentation }) {

    return (<option value={LanguageId}>{LanguageRepresentation}</option>)
}