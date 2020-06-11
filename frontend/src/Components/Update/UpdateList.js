import React from 'react'
import { Update } from './Update'

export function UpdateList({ points, updatesList, onBuy }) {
    const updates = []

    for (const ele in updatesList) {
        const tmpEle = updatesList[ele]
        let buyFunction = () => {
            tmpEle.Buy()
            onBuy()
        }
        if (tmpEle.Buy == null){
            buyFunction = null
        }
        updates.push(<Update
            key={ele}
            CPS={tmpEle.Multiplier}
            id={tmpEle.Id}
            price={tmpEle.Price}
            amount={tmpEle.Amount}
            buy={points >= tmpEle.Price ? buyFunction : null} />)
    }


    return (<div>
        <table>
            <thead>

            </thead>
            <tbody>
                {updates}
            </tbody>
        </table>
    </div>)
}