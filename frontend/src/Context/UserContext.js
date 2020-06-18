import React, { useState, createContext } from 'react'
import {UserState} from "../States/UserState"
export const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const newUserState = {...UserState}
  const [user, setUser] = useState(newUserState)
  const userValue = { user, setUser }

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  )
}
