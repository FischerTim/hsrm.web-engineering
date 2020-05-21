import React, { useState ,createContext} from 'react';

export const PointContext = createContext()
export const PointContextProvider = ({children}) => {
  const [points, setPoints] = useState(0)
  const [pPC, setPPC] = useState(0)
  const [pPS, setPPS] = useState(0)
  
  let myMap = new Map()

  
  myMap.set("Points", [points,setPoints])
  myMap.set("PPC", [pPC,setPPC])
  myMap.set("PPS",  [pPS,setPPS])

 return (
   <PointContext.Provider value={myMap}>
     {children}
   </PointContext.Provider>
 );
};