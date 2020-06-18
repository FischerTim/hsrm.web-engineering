import React, { createContext } from 'react'

import { RessourcesContextProvider } from './Ressource/RessourcesContext'

import { GeneratorsContextProvider } from './Lists/GeneratorsContext'

import { PointsContextProvider } from './Statistics/PointsContext'
import { GPPSContextProvider } from './Statistics/GPPSContext'
import { UpdatesContextProvider } from './Lists/UpdatesContext'
import { UserProvider } from './UserContext'
import { GameContextProvider } from './Ressource/GameContext'
import { LanguageContextProvider } from './Ressource/LanguageContext'
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
