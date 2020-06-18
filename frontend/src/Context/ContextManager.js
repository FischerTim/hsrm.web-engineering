import React, { createContext } from 'react'

import { RessourcesContextProvider } from './RessourcesContext'

import { GeneratorsContextProvider } from './GeneratorsContext'

import { PointsContextProvider } from './PointsContext'
import { GPPSContextProvider } from './GPPSContext'
import { UpdatesContextProvider } from './UpdatesContext'
import { UserProvider } from './UserContext'
import { GameContextProvider } from './GameContext'
import { LanguageContextProvider } from './LanguageContext'
export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
         <UserProvider>
            <GameContextProvider>
               <LanguageContextProvider>
                  <RessourcesContextProvider>
                     <GeneratorsContextProvider>
                        <UpdatesContextProvider>
                           <PointsContextProvider>
                              <GPPSContextProvider>
                                 {children}
                              </GPPSContextProvider>
                           </PointsContextProvider>
                        </UpdatesContextProvider>
                     </GeneratorsContextProvider>
                  </RessourcesContextProvider>
               </LanguageContextProvider>
            </GameContextProvider>
         </UserProvider>
      </ContextManager.Provider >
   )
}
