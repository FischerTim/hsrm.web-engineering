import React, {useContext} from 'react'
import {Accordion, Card, Image, Button, Table} from 'react-bootstrap'
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';

export function Generator({ generator, ressource }) {
    const { ressources } = useContext(RessourcesContext)
    
    return (<Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={generator.Id}>
            <Table className="table table-borderless">
                <thead>
                <tr><td>{ressource.Generators.List[generator.Id]}</td></tr>
                <tr>
                
          
           <td> <button disabled={generator.Buy == null} onClick={generator.Buy}>
                    {ressource.Generators.BuyText}
                </button> </td>
               <td> <Image src={ressources.Game.ImagePath.GeneratorPath + generator.Id + ".png"} fluid/>  </td>
                </tr>
                </thead>
                </Table>  
                </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={generator.Id}>
            <Card.Body>
            <Table borderless size="sm">
                <thead>
                <tr>
                    <th>{ressource.Generators.CpsText}</th>
                    <th>{ressource.Generators.IdText}</th>
                    <th>{ressource.Generators.PriceText}</th>
                    <th>{ressource.Generators.AmountText}</th>
                </tr>
                <tr>
                    <td>{generator.Income_rate}</td>
                    <td>{generator.Id}</td>
                    <td>{generator.Price}</td>
                    <td>{generator.Amount}</td>
                </tr>
                        
                <tr>
               
                    </tr>
                    </thead>
                        </Table>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
)
}