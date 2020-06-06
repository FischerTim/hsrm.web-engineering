import React, { useState, createContext, useContext } from 'react'


import { RessourcenContext } from './RessourcenContext'
import { GeneratorService } from '../Services/GeneratorService'

export const GeneratorServiceContext = createContext()
export const GeneratorServiceContextProvider = ({ children }) => {

  const { ressourcen } = useContext(RessourcenContext)

  const [generatorService] = useState(new GeneratorService(ressourcen.Backend))
  const generatorServiceValue = { generatorService }

  return (
    <GeneratorServiceContext.Provider value={generatorServiceValue}>
      {children}
    </GeneratorServiceContext.Provider>
  )
}