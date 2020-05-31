import React, { useState, createContext, useContext} from 'react';

import { RessourceService } from '../Services/RessourceService';
import { Languages } from '../Resources/LanguageResource';
 
export const RessourceContext = createContext()
export const RessourceContextProvider = ({ children }) => {
    const [ressource,setRessource] = useState(new RessourceService(Languages.DEFAULT))
    const ressourceValue = {ressource,setRessource}

    return (
        <RessourceContext.Provider value={ressourceValue}>
            {children}
        </RessourceContext.Provider>
    );
};