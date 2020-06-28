import React from 'react'
import { Generator } from './Generator'
import { Accordion } from 'react-bootstrap'

export function GeneratorList({ points, generatorsList, onBuyHook, gameRessources }) {
    const generators = []

    for (const ele in generatorsList) {
        const currentGenerator = { ...generatorsList[ele] }
        if (points >= currentGenerator.Price) {
            const rawBuy = currentGenerator.Buy
            const buyFunction = () => {
                rawBuy()
                onBuyHook()
            }
            currentGenerator.Buy = buyFunction
        } else {
            currentGenerator.Buy = null
        }
        generators.push(<Generator
            key={ele}
            generator={currentGenerator}
            ressource={gameRessources} />)
    }
    return (<div>
        <table>
            <thead>
                <tr>
                    <h4><td  colSpan="10" >{gameRessources.Generators.HeadText}</td></h4>
                </tr>
            </thead>
            <tbody>
                <Accordion>
                {generators} 
                </Accordion>
            </tbody>
        </table>
    </div>)
}