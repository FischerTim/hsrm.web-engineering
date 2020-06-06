import React from 'react'
import { Generator } from './Generator'

export function GeneratorList({ generatorsList }) {
    const generators = []
        for (const ele in generatorsList) {
            const tmpEle = generatorsList[ele]
            generators.push(<Generator
                key={ele}
                CPS={tmpEle.income_rate}
                id={ele} 
                price = {tmpEle.price}
                amount = {tmpEle.amount}/>)

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