import React, { createContext } from 'react'

import { UserContextProvider } from './UserContext'
import { UserServiceContextProvider } from './UserServiceContext'
import { LanguageContextProvider } from './LanguageContext'
import { RessourcenContextProvider } from './RessourcenContext'
import { RessourcenServiceContextProvider } from './RessourcenServiceContext'
import { ConnectionContextProvider } from './ConnectionContext'
import { ConnectionServiceContextProvider } from './ConnectionServiceContext'
import { GeneratorServiceContextProvider } from './GeneratorServiceContext'
import { GeneratorsContextProvider } from './GeneratorsContext'

import { PointsContextProvider } from './PointsContext'
import { GPPSContextProvider } from './GPPSContext'

export const ContextManager = createContext()
export const ContextManagerProvider = ({ children }) => {

   return (
      <ContextManager.Provider>
         <LanguageContextProvider>
            <RessourcenServiceContextProvider>
               <RessourcenContextProvider>
                  <GeneratorServiceContextProvider>
                     <GeneratorsContextProvider>
                        <ConnectionServiceContextProvider>
                           <ConnectionContextProvider>
                              <UserServiceContextProvider>
                                 <UserContextProvider>
                                    <PointsContextProvider>
                                       <GPPSContextProvider>
                                          {children}
                                       </GPPSContextProvider>
                                    </PointsContextProvider>
                                 </UserContextProvider>
                              </UserServiceContextProvider>
                           </ConnectionContextProvider>
                        </ConnectionServiceContextProvider>
                     </GeneratorsContextProvider>
                  </GeneratorServiceContextProvider>
               </RessourcenContextProvider>
            </RessourcenServiceContextProvider>
         </LanguageContextProvider>
      </ContextManager.Provider >
   )
}