import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export function Update({ update, ressource }) {
    // const buybutton = buy !== null ? <button onClick={buy}>Buy</button> : <button disabled={true}>Buy</button>
    // const cpsLabel = <label>{CPS}</label>
    // const idLabel = <label>{id}</label>
    // const priceLabel = <label>{price}</label>
    // const amountLabel = <label>{amount}</label>
    // return (<tr><td>CPS:  {cpsLabel} |  id:  {idLabel} |  price: {priceLabel} |  amount:  {amountLabel} {buybutton}</td></tr>)

    return (
        <p>
        <DropdownButton title={ressource.Updates.List[update.Id]}>
            <Dropdown.Item>{ressource.Updates.MultiplierText}{update.Multiplier}</Dropdown.Item>
            <Dropdown.Item>{ressource.Updates.IdText}{update.Id}</Dropdown.Item>
            <Dropdown.Item>{ressource.Updates.PriceText}{update.Price}</Dropdown.Item>
            <Dropdown.Item> <input type="radio" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input></Dropdown.Item>
        </DropdownButton>
        </p>
    )
}