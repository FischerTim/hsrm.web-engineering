import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'

import { RessourcenContext } from './Context/RessourcenContext'

function App() {

  const ressourcen = useContext(RessourcenContext).ressourcen

  return (
    <div className="src/App">
      <Router>
        <Switch>
          <Route path={ressourcen.Path.Login}>
            <LoginPage />
          </Route>
          <Route path={ressourcen.Path.Register}>
            <RegisterPage />
          </Route>
          <Route path={ressourcen.Path.Core}>
            <CorePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
