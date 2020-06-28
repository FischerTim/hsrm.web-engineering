import React from 'react'

export function Update({ update ,ressource}) {
    // const buybutton = buy !== null ? <button onClick={buy}>Buy</button> : <button disabled={true}>Buy</button>
    // const cpsLabel = <label>{CPS}</label>
    // const idLabel = <label>{id}</label>
    // const priceLabel = <label>{price}</label>
    // const amountLabel = <label>{amount}</label>
    // return (<tr><td>CPS:  {cpsLabel} |  id:  {idLabel} |  price: {priceLabel} |  amount:  {amountLabel} {buybutton}</td></tr>)

    return (
        <tr>
            <td>
                {update.Multiplier}
            </td>
            <td>
                {update.Id}
            </td>
            <td>
                {update.Price}
            </td>
            <td>
                <input type="checkbox" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input>
            </td>
        </tr>
    )
}