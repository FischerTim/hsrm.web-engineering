import React from 'react'
import { DropdownButton, Dropdown, Table } from 'react-bootstrap'

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
            <Table borderless size="sm">
                <tr>
                    <th>{ressource.Updates.MultiplierText}</th>
                    <td>{update.Multiplier}</td>
                </tr>
                <tr>
                    <th>{ressource.Updates.IdText}</th>
                    <td>{update.Id}</td>
                </tr>
                <tr>
                    <th>{ressource.Updates.PriceText}</th>
                    <td>{update.Price}</td>
                </tr>
            </Table>
            
            <Dropdown.Item> <input type="radio" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input></Dropdown.Item>
        </DropdownButton>
        </p>
    )
}