import React, { useState, createContext, useContext } from 'react'

import { ConnectionService } from '../Services/ConnectionService'
import { RessourcenContext } from './RessourcenContext'

export const ConnectionServiceContext = createContext()
export const ConnectionServiceContextProvider = ({ children }) => {

  const { ressourcen } = useContext(RessourcenContext)

  const [connectionService] = useState(new ConnectionService(ressourcen.Backend))
  const connectionServiceValue = { connectionService }

  return (
    <ConnectionServiceContext.Provider value={connectionServiceValue}>
      {children}
    </ConnectionServiceContext.Provider>
  )
}