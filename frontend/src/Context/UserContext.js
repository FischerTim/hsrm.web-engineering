import React, { useState, createContext } from 'react'

import { UserState } from '../States/UserState'

export const UserContext = createContext()
export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(UserState)
  const userValue = { user, setUser }

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  )
}