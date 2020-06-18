import React, { createContext } from 'react'

import { RessourcenContextProvider } from './RessourcenContext'

import { GeneratorsContextProvider } from './GeneratorsContext'

import { PointsContextProvider } from './PointsContext'
import { GPPSContextProvider } from './GPPSContext'
import { UpdatesContextProvider } from './UpdatesContext'
import { UserProvider } from './UserContext'
export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
        <UserProvider>


         <RessourcenContextProvider>
            <GeneratorsContextProvider>
               <UpdatesContextProvider>
                  <PointsContextProvider>
                     <GPPSContextProvider>
                       {children}

                     </GPPSContextProvider>
                  </PointsContextProvider>
               </UpdatesContextProvider>
            </GeneratorsContextProvider>
         </RessourcenContextProvider>
         </UserProvider>
      </ContextManager.Provider >
   )
}
