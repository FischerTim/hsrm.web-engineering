import React, {createContext} from 'react';
import { UserContextProvider } from './UserContext';

export const ContextManager = createContext()
export const ContextManagerProvider = ({children}) => {

 return (
   <ContextManager.Provider>
      <UserContextProvider>
         {children}
      </UserContextProvider>
   </ContextManager.Provider>
 );
};