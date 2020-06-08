import React, { createContext } from 'react'

import { RessourcenContextProvider } from './RessourcenContext'

import { GeneratorsContextProvider } from './GeneratorsContext'

import { PointsContextProvider } from './PointsContext'
import { GPPSContextProvider } from './GPPSContext'

export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
         <RessourcenContextProvider>
            <GeneratorsContextProvider>
               <PointsContextProvider>
                  <GPPSContextProvider>
                     {children}
                  </GPPSContextProvider>
               </PointsContextProvider>
            </GeneratorsContextProvider>
         </RessourcenContextProvider>
      </ContextManager.Provider >
   )
}