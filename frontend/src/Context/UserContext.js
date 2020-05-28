import React, { useState ,createContext} from 'react';
import { User } from '../Entitys/User';

export const UserContext = createContext()
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(new User())
    const userValue = {user, setUser}
 return (
   <UserContext.Provider value={userValue}>
     {children}
   </UserContext.Provider>
 );
};