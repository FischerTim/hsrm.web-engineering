import React from 'react'

export function Generator({ CPS, id, price, amount, buy }) {

    return (<tr><td>CPS:  <label>{CPS}</label> |  id:  <label>{id}</label> |  price:  <label>{price}</label> |  amount:  <label>{amount}</label> <button onClick={buy}>Buy</button></td></tr>)
}