import React from 'react'

export function Generator({CPS, id, price, amount }) {

    return (<tr><td>CPS:  <label>{CPS}</label> |  id:  <label>{id}</label> |  price:  <label>{price}</label> |  amount:  <label>{amount}</label></td></tr>)
}