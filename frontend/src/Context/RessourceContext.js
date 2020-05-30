import React, { useState, createContext } from 'react';

import { RessourceService } from '../Services/RessourceService';

export const RessourceContext = createContext()
export const RessourceContextProvider = ({ children }) => {

    const [ressource] = useState(new RessourceService())
    
    return (
        <RessourceContext.Provider value={ressource}>
            {children}
        </RessourceContext.Provider>
    );
};