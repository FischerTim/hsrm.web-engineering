import React from 'react'

export function Generator({ generator, ressource }) {
    return (<tr>
        <td>
            {generator.Income_rate}
        </td>
        <td>
            {generator.Order}
        </td>
        <td>
            {generator.Price}
        </td>
        <td>
            {generator.Amount}
        </td>
        <td>
            <button disabled={generator.Buy == null} onClick={generator.Buy}>
                {ressource.Generators.BuyText}
            </button>
        </td>

    </tr>)
}