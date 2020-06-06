import React, { useState, createContext, useContext } from 'react'

import { GeneratorServiceContext } from './GeneratorServiceContext'

export const GeneratorsContext = createContext()
export const GeneratorsContextProvider = ({ children }) => {

  const { generatorService } = useContext(GeneratorServiceContext)

  const [generators, setGenerators] = useState(generatorService.getGenerators(null))
  const generatorsValue = { generators, setGenerators }

  return (
    <GeneratorsContext.Provider value={generatorsValue}>
      {children}
    </GeneratorsContext.Provider>
  )
}