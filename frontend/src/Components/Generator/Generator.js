import React from 'react'
import { Dropdown, DropdownButton, Table } from 'react-bootstrap'

export function Generator({ generator, ressource }) {
    const a =  '<Image src={"info.png"} thumbnail />'
   
    return (
        <p>

            <Table borderless>
                <tr>
                    <td>
                        <DropdownButton size="xs" title={ressource.Generators.List[generator.Id]}>

                            <Table borderless size="sm">
                                <tr>
                                    <th>{ressource.Generators.CpsText}</th>
                                    <td>{generator.Income_rate}</td>
                                </tr>
                                <tr>
                                    <th>{ressource.Generators.IdText}</th>
                                    <td>{generator.Id}</td>
                                </tr>
                                <tr>
                                    <th>{ressource.Generators.PriceText}</th>
                                    <td>{generator.Price}</td>
                                </tr>
                                <tr>
                                    <th>{ressource.Generators.AmountText}</th>
                                    <td>{generator.Amount}</td>
                                </tr>
                            </Table>
                        </DropdownButton>
                    </td>
                    <td><button disabled={generator.Buy == null} onClick={generator.Buy}>
                        {ressource.Generators.BuyText}
                    </button></td>

                </tr>
            </Table>
        </p>
    )
}