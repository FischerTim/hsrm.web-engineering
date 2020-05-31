import React, { useState, createContext, useContext } from 'react'

import { UserService } from '../Services/UserService'

import { RessourcenServiceContext } from './RessourcenServiceContext'
import { LanguageContext } from './LanguageContext'

export const UserServiceContext = createContext()
export const UserServiceContextProvider = ({ children }) => {

  const { language } = useContext(LanguageContext)
  const serverData = useContext(RessourcenServiceContext).ressourcenService.getRessourcen(language).Backend
  const [userService] = useState(new UserService(serverData))
  const userServiceValue = { userService }

  return (
    <UserServiceContext.Provider value={userServiceValue}>
      {children}
    </UserServiceContext.Provider>
  )
}