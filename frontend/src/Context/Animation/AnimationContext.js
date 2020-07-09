import React, { useState, createContext } from 'react'

export const AnimationContext = createContext()
export const AnimationsContextProvider = ({ children }) => {

  const [animationList, setAnimationList] = useState([])
  const animationValue = { animationList, setAnimationList }

  return (
    <AnimationContext.Provider value={animationValue}>
      {children}
    </AnimationContext.Provider>
  )
}