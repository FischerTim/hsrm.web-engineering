import React from 'react'
import { Generator } from './Generator'

export function GeneratorList({ points, generatorsList, onBuy }) {
    const generators = []

    for (const ele in generatorsList) {
        const tmpEle = generatorsList[ele]
        const buyFunction = () => {
            tmpEle.Buy()
            onBuy()
        }
        generators.push(<Generator
            key={ele}
            CPS={tmpEle.Income_rate}
            id={tmpEle.Id}
            price={tmpEle.Price}
            amount={tmpEle.Amount}
            buy={points>=tmpEle.Price? buyFunction:null} />)
    }


    return (<div>
        <table>
            <thead>

            </thead>
            <tbody>
                {generators}
            </tbody>
        </table>
    </div>)
}