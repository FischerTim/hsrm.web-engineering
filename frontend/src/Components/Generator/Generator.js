import React from 'react'
import { Accordion, Card, Image, Button, Table } from 'react-bootstrap'


export function Generator({ generator, ressource }) {

    return (
        <Card>
            
                <Accordion.Toggle as={Button} variant="link" eventKey={generator.Order}>
                    <Table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    {ressource.Generators.List[generator.Order]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Image src={ressource.ImagePath.GeneratorPath + generator.Order + ".png"} fluid />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Toggle>


                <Accordion.Collapse eventKey={generator.Order}>

                    <Table borderless>
                        <thead>
                            <tr>
                                <th>{ressource.Generators.CpsText}</th>
                                <th>{ressource.Generators.IdText}</th>
                                <th>{ressource.Generators.PriceText}</th>
                                <th>{ressource.Generators.AmountText}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{generator.Income_rate}</td>
                                <td>{generator.Order}</td>
                                <td>{generator.Price}</td>
                                <td>{generator.Amount}</td>
                            </tr>
                            <tr>
                                <td>
                                    <button disabled={generator.Buy == null} onClick={generator.Buy}>
                                        {ressource.Generators.BuyText}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
  
                </Accordion.Collapse>
          
        </Card>
    )

}