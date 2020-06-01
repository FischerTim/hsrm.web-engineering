import React, { useState, createContext } from 'react'

import { BackendServer } from '../Ressourcen/BackendServerRessourcen'
import { ConnectionService } from '../Services/ConnectionService'

export const ConnectionServiceContext = createContext()
export const ConnectionServiceContextProvider = ({ children }) => {

  const [connectionService] = useState(new ConnectionService(BackendServer))
  const connectionServiceValue = { connectionService }

  return (
    <ConnectionServiceContext.Provider value={connectionServiceValue}>
      {children}
    </ConnectionServiceContext.Provider>
  )
}