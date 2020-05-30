import React, { useState, createContext } from 'react';

export const SpracheContext = createContext()
export const SpracheContextProvider = ({ children }) => {

  const [sprache, setSprache] = useState("DE")
  const sprachValue = { sprache, setSprache }
  
  return (
    <SpracheContext.Provider value={sprachValue}>
      {children}
    </SpracheContext.Provider>
  );
};