import React from 'react'
import { Card, Accordion, Button, Table, Image } from 'react-bootstrap'


export default function Update({ update, ressource }) {

    return (
        <Card>


            <Table className="table table-borderless">
                <thead>
                    <tr>
                        <td> <Image src={ressource.ImagePath.UpdatePath + update.Id + ".png"} fluid /></td>
                        <td>
                            {ressource.Updates.IdText} {update.Id}
                        </td>
                        <td>
                            <input type="checkbox" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input>
                        </td>
                        <td>
                            <Accordion.Toggle as={Button} variant="link" eventKey={update.Id}>
                            <label><Image width="15" className="rounded mx-auto d-block" src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/info_512pxGREY.png" fluid />Info</label>

                                
                            </Accordion.Toggle>
                        </td>
                    </tr>
                </thead>
            </Table>



            <Accordion.Collapse eventKey={update.Id}>

                <Table borderless>
                    <thead>
                        <tr>
                            <th>{ressource.Updates.MultiplierText}</th>
                            <th> {ressource.Updates.IdText}</th>
                            <th>{ressource.Updates.PriceText}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{update.Multiplier}</td>
                            <td>{update.Id}</td>
                            <td>{update.Price}</td>
                        </tr>
                    </tbody>
                </Table>

            </Accordion.Collapse>
        </Card>
    )
}

//<Image src={ "information.png"} fluid />