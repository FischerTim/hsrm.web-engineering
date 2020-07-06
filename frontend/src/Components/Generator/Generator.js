import React, { useState } from 'react'
import { Accordion, Card, Image, Button, Table } from 'react-bootstrap'


export function Generator({ generator, ressource }) {

    const [hoverImg, setHover] = useState(false);

    return (
        <Card>


            <Table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>
                            <Image src={ressource.ImagePath.GeneratorPath + generator.Order + ".png"} fluid />
                        </td>
                        <td>
                            <h5>{ressource.Generators.List[generator.Order]}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button disabled={generator.Buy == null} onClick={generator.Buy} variant="secondary">
                                {ressource.Generators.BuyText}
                            </Button>
                        </td>
                        <td>
                            <Accordion.Toggle as={Button} variant="link" eventKey={generator.Order}>
                                <label><Image
                                    onMouseOut={() => setHover(false)}
                                    onMouseOver={() => setHover(true)}
                                    style={{ transform: `${hoverImg ? 'scale(1.1,1.1)' : 'scale(1.0,1.0)'}` }}
                                    width="35" className="rounded mx-auto d-block" src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/info_512pxGREY.png" fluid />Info</label>

                            </Accordion.Toggle>
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

/**
 <td>
                            <Table className="table table-borderless">
                                <tbody>
                                    <tr>

                                        <td>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={generator.Order}>
                                                <label><Image
                                                    onMouseOut={() => setHover(false)}
                                                    onMouseOver={() => setHover(true)}
                                                    style={{ transform: `${hoverImg ? 'scale(1.1,1.1)' : 'scale(1.0,1.0)'}` }}
                                                    width="35" className="rounded mx-auto d-block" src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/info_512pxGREY.png" fluid />Info</label>

                                            </Accordion.Toggle>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Button disabled={generator.Buy == null} onClick={generator.Buy} variant="secondary">
                                                {ressource.Generators.BuyText}
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
 */