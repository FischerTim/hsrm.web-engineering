import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'

import { RessourceContext } from './Context/RessourceContext'

function App() {
  
  const {ressource} = useContext(RessourceContext)

  return (
    <div className="src/App">
      <Router>
        <Switch>
          <Route path={ressource.Path.Login}>
            <LoginPage />
          </Route>
          <Route path={ressource.Path.Register}>
            <RegisterPage />
          </Route>
          <Route path={ressource.Path.Core}>
            <CorePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
