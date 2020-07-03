import React from 'react'

import { Generator } from './Generator'
import { Accordion } from 'react-bootstrap'

export default function GeneratorList({ points, generatorsList, onBuyHook, gameRessources }) {
    const generators = []

    for (const ele in generatorsList) {
        if (ele !== "SelectImage") {
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
    }


    return (
        <div>
            <h4>{gameRessources.Generators.HeadText}</h4>
            <Accordion>
                {generators}
            </Accordion>
        </div>
    )

}