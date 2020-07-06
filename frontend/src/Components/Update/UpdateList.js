import React from 'react'

import Update from './Update'
import { Accordion } from 'react-bootstrap'

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

    return (
        <div>
            <Accordion>
                {updates}
            </Accordion>
        </div>)
}

//<h4>{gameRessources.Updates.HeadText}</h4>