import React, { createContext } from 'react'

import { UserContextProvider } from './UserContext'
import { UserServiceContextProvider } from './UserServiceContext'
import { LanguageContextProvider } from './LanguageContext'
import { RessourcenContextProvider } from './RessourcenContext'
import { RessourcenServiceContextProvider } from './RessourcenServiceContext'


export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
         <LanguageContextProvider>
            <RessourcenServiceContextProvider>
               <RessourcenContextProvider>
                  <UserServiceContextProvider>
                     <UserContextProvider>
                        {children}
                     </UserContextProvider>
                  </UserServiceContextProvider>
               </RessourcenContextProvider>
            </RessourcenServiceContextProvider>
         </LanguageContextProvider>
      </ContextManager.Provider>
   )
}