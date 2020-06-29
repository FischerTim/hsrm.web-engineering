import React, {useContext} from 'react'
import { Card, Accordion, Button, Table, Image } from 'react-bootstrap'
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext'

export function Update({ update ,ressource}) {
    const { ressources } = useContext(RessourcesContext)
    // const buybutton = buy !== null ? <button onClick={buy}>Buy</button> : <button disabled={true}>Buy</button>
    // const cpsLabel = <label>{CPS}</label>
    // const idLabel = <label>{id}</label>
    // const priceLabel = <label>{price}</label>
    // const amountLabel = <label>{amount}</label>
    // return (<tr><td>CPS:  {cpsLabel} |  id:  {idLabel} |  price: {priceLabel} |  amount:  {amountLabel} {buybutton}</td></tr>)

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={update.Id}>
                    <Table className="table table-borderless">
                        <thead>
                            <tr>
                                <td>Update Nr. {update.Id}</td>
                                <td>
                <input type="checkbox" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input>
            </td>
            <td> <Image src={ressources.Game.ImagePath + "/Egg_" + update.Id + ".png"} thumbnail/>  </td>
                            </tr>
                        </thead>
                    </Table>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={update.Id}>
                <Card.Body>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>{ressources.Game.Updates.MultiplierText}</th>
                                <th> {ressources.Game.Updates.IdText}</th>
                                <th>{ressources.Game.Updates.PriceText}</th>
                            </tr>
                            <tr>
                                <td>{update.Multiplier}</td>
                                <td>{update.Id}</td>
                                <td>{update.Price}</td>
                            </tr>
                        </thead>
                    </Table>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}