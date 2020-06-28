import React from 'react'
import { Accordion, Button , Table, Card } from 'react-bootstrap'

export function Generator({ generator, ressource }) {

   
    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={generator.Id}>{ressource.Generators.List[generator.Id]}</Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={generator.Id}>
                <Card.Body>
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

                    <td><button disabled={generator.Buy == null} onClick={generator.Buy}>
                        {ressource.Generators.BuyText}
                    </button></td>
                            </Table>
                </Card.Body>
            </Accordion.Collapse>
        </Card>


           
    )
}