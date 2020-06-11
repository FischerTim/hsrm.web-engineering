import React, { createContext } from 'react'

import { RessourcenContextProvider } from './RessourcenContext'

import { GeneratorsContextProvider } from './GeneratorsContext'

import { PointsContextProvider } from './PointsContext'
import { GPPSContextProvider } from './GPPSContext'
import { UpdatesContextProvider } from './UpdatesContext'

export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
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
      </ContextManager.Provider >
   )
}