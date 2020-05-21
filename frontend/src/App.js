import React from 'react'
import './App.css'
import {Infobox} from './NewStuff/Infobox'
import {Test} from './NewStuff/Test'
import {PointContextProvider} from "./Content/PointContext"

function App() {
  
  return (
    <PointContextProvider>
    <div className="src/App">
        <Test></Test>
        <Infobox></Infobox> 
    </div>
    </PointContextProvider>  
  )
}

export default App;
