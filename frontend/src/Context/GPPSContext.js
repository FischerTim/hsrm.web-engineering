import React, { useState, createContext } from 'react'

import { StatisticState } from '../States/StatisticState'

export const GPPSContext = createContext()
export const GPPSContextProvider = ({ children }) => {

  const [gPPS, setGPPS] = useState(StatisticState.GPPS)
  const gPPSValue = { gPPS, setGPPS }

  return (
    <GPPSContext.Provider value={gPPSValue}>
      {children}
    </GPPSContext.Provider>
  )
}