import React, {createContext} from 'react';
import { UserContextProvider } from './UserContext';
import { SpracheContextProvider } from './SprachContext';

export const ContextManager = createContext()
export const ContextManagerProvider = ({children}) => {

 return (
   <ContextManager.Provider>
      <UserContextProvider>
         <SpracheContextProvider>
            {children}
         </SpracheContextProvider>
      </UserContextProvider>
   </ContextManager.Provider>
 );
};