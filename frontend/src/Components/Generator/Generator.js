import React from 'react'
import { Accordion, Card, Image, Button, Table } from 'react-bootstrap'


export function Generator({ generator, ressource }) {

    return (
        <Card>


            <Table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>
                            <Image src={ressource.ImagePath.GeneratorPath + generator.Order + ".png"} fluid />

                        </td>
                        <td>
                            {ressource.Generators.List[generator.Order]}
                        </td>
                        <td>
                            <Table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>
                                        <button disabled={generator.Buy == null} onClick={generator.Buy}>
                                            {ressource.Generators.BuyText}
                                        </button>
                                        </td>
                                        </tr>
                                    <tr>
                                        <td>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={generator.Order}>
                                
                                        < Image src={ "information.png"} fluid />
                                        </Accordion.Toggle>
                                    </td>
                                    </tr>
                                    
                                </tbody>
                            </Table>

                        </td>
                    </tr>
                </tbody>
            </Table>



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

                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Accordion.Collapse>

        </Card>
    )

}