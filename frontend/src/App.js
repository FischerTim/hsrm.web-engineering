import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'


import { LanguageSwitch } from './Components/Language/LanguageSwitch'
import { RessourceService } from './Services/RessourceService'

function App() {

  const ressourceService = new RessourceService()
  const ressources = ressourceService.get()

  return (
    <div className="src/App">
      <Router>
        <Switch>
          <Route path={ressources.Path.Login}>
            <LoginPage />
          </Route>
          <Route path={ressources.Path.Register}>
            <RegisterPage />
          </Route>
          <Route path={ressources.Path.Core}>
            <CorePage />
          </Route>
        </Switch>
      </Router>
      <LanguageSwitch ressourceService={ressourceService}></LanguageSwitch>
    </div>
  )
}

export default App;
