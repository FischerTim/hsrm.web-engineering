import React from 'react'

export function Generator({ generator, ressource }) {
    return (<tr>
        <td>
            {ressource.Generators.CpsText}
            <label>
                {generator.Income_rate}
            </label>
        </td>
        <td>
            {ressource.Generators.IdText}
            <label>
                {generator.Order}
            </label>
        </td>
        <td>
            {ressource.Generators.PriceText}
            <label>
                {generator.Price}
            </label>
        </td>
        <td>
            {ressource.Generators.AmountText}
            <label>
                {generator.Amount}
            </label>
        </td>
        <td>
            <button disabled={generator.Buy == null} onClick={generator.Buy}>
                {ressource.Generators.BuyText}
            </button>
        </td>

    </tr>)
}