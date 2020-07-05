import React from 'react'
import { Card, Accordion, Button, Table, Image } from 'react-bootstrap'


export default function Update({ update, ressource }) {

    return (
        <Card>

                <Accordion.Toggle as={Button} variant="link" eventKey={update.Id}>
                    <Table className="table table-borderless">
                        <thead>
                            <tr>
                                <td>
                                    Update Nr. {update.Id}
                                </td>
                                <td>
                                    <input type="checkbox" value="male" onClick={update.Buy} disabled={update.Buy == null} defaultChecked={update.Bought}></input>
                                </td>
                                <td> <Image src={ressource.ImagePath.UpdatePath + update.Id + ".png"} fluid /></td>
                            </tr>
                        </thead>
                    </Table>
                </Accordion.Toggle>
  
        
                <Accordion.Collapse eventKey={update.Id}>

                    <Table borderless>
                        <thead>
                            <tr className='updateTableHead'>
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