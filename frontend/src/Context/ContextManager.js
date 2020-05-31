import React, { createContext } from 'react'

import { UserContextProvider } from './UserContext'
import { RessourceContextProvider } from './RessourceContext'

export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
            <UserContextProvider>
               <RessourceContextProvider>
                  {children}
               </RessourceContextProvider>
            </UserContextProvider>
      </ContextManager.Provider>
   );
};