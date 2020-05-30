import React, { createContext } from 'react'

import { UserContextProvider } from './UserContext'
import { SpracheContextProvider } from './SprachContext'
import { RessourceContextProvider } from './RessourceContext'

export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
         <UserContextProvider>
            <SpracheContextProvider>
               <RessourceContextProvider>
                  {children}
               </RessourceContextProvider>
            </SpracheContextProvider>
         </UserContextProvider>
      </ContextManager.Provider>
   );
};