import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'


import { LanguageSwitch } from './Components/Language/LanguageSwitch'
import { Ressources } from './Services/Ressources'

function App() {

  const ressources = new Ressources()

  return (
    <div className="src/App">
      <Router>
        <Switch>
          <Route path={ressources.get().Path.Login}>
            <LoginPage />
          </Route>
          <Route path={ressources.get().Path.Register}>
            <RegisterPage />
          </Route>
          <Route path={ressources.get().Path.Core}>
            <CorePage />
          </Route>
        </Switch>
      </Router>
      <LanguageSwitch ressources={ressources}></LanguageSwitch>
    </div>
  )
}

export default App;
