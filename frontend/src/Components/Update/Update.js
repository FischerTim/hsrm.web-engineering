import React from 'react'

export function Update({ CPS, id, price, amount, buy }) {
    const buybutton = buy !== null ? <button onClick={buy}>Buy</button> : <button disabled={true}>Buy</button>
    const cpsLabel = <label>{CPS}</label>
    const idLabel = <label>{id}</label>
    const priceLabel = <label>{price}</label>
    const amountLabel = <label>{amount}</label>
    return (<tr><td>CPS:  {cpsLabel} |  id:  {idLabel} |  price: {priceLabel} |  amount:  {amountLabel} {buybutton}</td></tr>)
}