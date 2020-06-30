import React from 'react'
import Update from './Update'

export default function UpdateList({ points, updatesList, onBuyHook, gameRessources }) {
    const updates = []

    for (const ele in updatesList) {
        if (ele !== "SelectImage") {
            const currentUpdate = { ...updatesList[ele] }
            if (points >= currentUpdate.Price && currentUpdate.Buy !== null) {
                const rawBuy = currentUpdate.Buy
                const buyFunction = () => {
                    rawBuy()
                    onBuyHook()
                }
                currentUpdate.Buy = buyFunction
            } else {
                currentUpdate.Buy = null
            }

            updates.push(<Update
                key={ele}
                update={currentUpdate}
                ressource={gameRessources}
            />)
        }
    }

    return (<div>
        <table>
            <thead>
                <tr className='upListTableHead'>
                    <th colSpan="10" >{gameRessources.Updates.HeadText}</th>
                </tr>
                <tr className='upListTableBody'>
                    <th>
                        {gameRessources.Updates.MultiplierText}
                    </th>
                    <th>
                        {gameRessources.Updates.IdText}
                    </th>
                    <th>
                        {gameRessources.Updates.PriceText}
                    </th>
                </tr>
            </thead>
            <tbody>
                {updates}
            </tbody>
        </table>
    </div>)
}