import React from 'react'
import { useContext } from 'react'
import { BrowserRouter as Router, Switch,Route, useHistory } from "react-router-dom"

import { UserContext } from './Context/UserContext'
import { LoginModul } from './Pages/Login/LoginModul'
import { RegisterModul } from './Pages/Register/RegisterModul'

import { Home } from './Pages/Home/Home'
import { SpracheContext } from './Context/SprachContext'


function App() {
  
  const { user } = useContext(UserContext)
  const { sprache ,setSprache} = useContext(SpracheContext)
  const history = useHistory()
  const myFunction = () => {
    console.log(sprache)
    if (sprache == "DE"){
      setSprache("EN")
    }else{
      setSprache("DE")
    }
  }
  return (
    <div className="src/App">
      <button onClick={myFunction}>Sprache</button>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginModul/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/register">
            <RegisterModul/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App;
