import React, { useState, createContext } from 'react'
import { ConnectionState } from '../States/ConnectionState'

export const ConnectionContext = createContext()
export const ConnectionContextProvider = ({ children }) => {

  const [connection, setConnection] = useState(ConnectionState)
  const connectionValue = { connection, setConnection }

  return (
    <ConnectionContext.Provider value={connectionValue}>
      {children}
    </ConnectionContext.Provider>
  )
}