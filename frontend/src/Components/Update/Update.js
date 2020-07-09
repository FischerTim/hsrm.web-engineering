import React, { useState } from 'react'
import { Card, Accordion, Button, Table, Image } from 'react-bootstrap'
import Checkbox from '@material-ui/core/Checkbox';

export default function Update({ update, ressource }) {

    const [hoverImg, setHover] = useState(false);
    var iwas = <Checkbox value="male" style={{ color: "#00e676", }} color="secondary" onChange={update.Buy} disabled={update.Buy == null} checked={update.Bought}></Checkbox>

    if (update.Bought) {
        iwas = <Checkbox value="male" style={{ color: "#00e676", }} color="secondary" onChange={update.Buy} disabled={update.Buy == null} checked={update.Bought}></Checkbox>
    } else if (update.Buy == null && !update.Bought) {
        iwas = <Checkbox value="male" style={{ color: "grey", }} color="secondary" onChange={update.Buy} disabled={update.Buy == null} checked={update.Bought}></Checkbox>

    } else {
        iwas = <Checkbox value="male" style={{ color: "#00e676", }} color="secondary" onChange={update.Buy} disabled={update.Buy == null} checked={update.Bought}></Checkbox>
    }

    return (
        <Card>


            <Table className="table table-borderless">
                <thead>
                    <tr>
                        <td> <Image src={ressource.ImagePath.UpdatePath + update.Id + ".png"} fluid /></td>

                        <td>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            {ressource.Updates.List[update.Id]}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td >
                                            {iwas}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>


                        </td>

                        <td>
                            <Accordion.Toggle as={Button} variant="link" eventKey={update.Id}>
                                <label><Image
                                    onMouseOut={() => setHover(false)}
                                    onMouseOver={() => setHover(true)}
                                    style={{ transform: `${hoverImg ? 'scale(1.1,1.1)' : 'scale(1.0,1.0)'}` }}
                                    width="50" className="rounded mx-auto d-block" src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/info_512pxGREY.png" fluid />Info</label>

                            </Accordion.Toggle>
                        </td>
                    </tr>
                </thead>
            </Table>



            <Accordion.Collapse eventKey={update.Id}>

                <Table borderless>
                    <thead>
                        <tr className="updateTableHead">
                            <th>{ressource.Updates.MultiplierText}</th>
                            <th>{ressource.Updates.IdText}</th>
                            <th>{ressource.Updates.PriceText}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="updateTableBody">
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