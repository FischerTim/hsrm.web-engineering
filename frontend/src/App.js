import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'

import { RessourcenContext } from './Context/RessourcenContext'
import { LanguageSwitch } from './Components/Language/LanguageSwitch'
import { RessourcenServiceContext } from './Context/RessourcenServiceContext'
import { LanguageContext } from './Context/LanguageContext'

function App() {

  const { language, setLanguage } = useContext(LanguageContext)
  const { ressourcen, setRessourcen } = useContext(RessourcenContext)
  const { ressourcenService } = useContext(RessourcenServiceContext)

  return (
    <div className="src/App">
      <LanguageSwitch ressourcenService={ressourcenService} setRessourcen={setRessourcen} language={language} setLanguage={setLanguage} ></LanguageSwitch>
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
