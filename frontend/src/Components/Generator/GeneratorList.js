import React from 'react'
import { Generator } from './Generator'

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
                    <td colSpan="10" >{gameRessources.Generators.HeadText}</td>
                </tr>
            </thead>
            <tbody>
                {generators}
            </tbody>
        </table>
    </div>)
}