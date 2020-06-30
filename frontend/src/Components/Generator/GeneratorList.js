import React from 'react'
import Generator from './Generator'

export default function GeneratorList({ points, generatorsList, onBuyHook, gameRessources }) {
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
                <tr className='genListTableHead'>
                    <th colSpan="10" >{gameRessources.Generators.HeadText}</th>
                </tr>
                <tr className='genListTableBody'>
                    <th>
                        {gameRessources.Generators.CpsText}
                    </th>
                    <th>
                        {gameRessources.Generators.IdText}
                    </th>
                    <th>
                        {gameRessources.Generators.PriceText}
                    </th>
                    <th>
                        {gameRessources.Generators.AmountText}
                    </th>
                </tr>
            </thead>
            <tbody>
                {generators}
            </tbody>
        </table>
    </div>)
}