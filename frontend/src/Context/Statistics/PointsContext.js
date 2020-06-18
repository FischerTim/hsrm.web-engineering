import React, { useState, createContext } from 'react'

import { StatisticState } from '../../States/StatisticState'

export const PointsContext = createContext()
export const PointsContextProvider = ({ children }) => {

  const [points, setPoints] = useState(StatisticState.GeneralPoint)
  const pointsValue = { points, setPoints }

  return (
    <PointsContext.Provider value={pointsValue}>
      {children}
    </PointsContext.Provider>
  )
}