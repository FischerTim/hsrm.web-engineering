import React, { useState, createContext } from 'react'

import { UpdatesState } from '../States/UpdateState'

export const UpdatesContext = createContext()
export const UpdatesContextProvider = ({ children }) => {

  const [updates, setUpdates] = useState({ ...UpdatesState })
  const updatesValue = { updates, setUpdates }

  return (
    <UpdatesContext.Provider value={updatesValue}>
      {children}
    </UpdatesContext.Provider>
  )
}