import React from 'react'
import { Generator } from './Generator'

export function GeneratorList({ generatorsList }) {
    const generators = []
        for (const ele in generatorsList) {
            const tmpEle = generatorsList[ele]
            generators.push(<Generator
                key={ele}
                CPS={tmpEle.Income_rate}
                id={tmpEle.Id} 
                price = {tmpEle.Price}
                amount = {tmpEle.Amount}
                buy = {tmpEle.Buy}/>)

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