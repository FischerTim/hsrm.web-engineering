import React, { useState, createContext } from 'react'

import { GeneratorsState } from '../../States/GeneratorState'

export const GeneratorsContext = createContext()
export const GeneratorsContextProvider = ({ children }) => {

  const [generators, setGenerators] = useState({ ...GeneratorsState })
  const generatorsValue = { generators, setGenerators }

  return (
    <GeneratorsContext.Provider value={generatorsValue}>
      {children}
    </GeneratorsContext.Provider>
  )
}