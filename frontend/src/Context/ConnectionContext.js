import React, { useState, createContext, useContext } from 'react'

import { ConnectionServiceContext } from './ConnectionServiceContext'

export const ConnectionContext = createContext()
export const ConnectionContextProvider = ({ children }) => {

  const { connectionService } = useContext(ConnectionServiceContext)

  const [connection, setConnection] = useState(connectionService.getConnection(null))
  const connectionValue = { connection, setConnection }

  return (
    <ConnectionContext.Provider value={connectionValue}>
      {children}
    </ConnectionContext.Provider>
  )
}