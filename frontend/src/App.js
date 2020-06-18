import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { CorePage } from './Pages/CorePage'

import { CustomNavBar } from './Components/NavBar/CustomNavBar'
import { RessourcesContext } from './Context/Ressource/RessourcesContext'

function App() {

  const {ressources} = useContext(RessourcesContext)

  return (
    <div className="src/App">
      <CustomNavBar/>
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

    </div>
  )
}

export default App;
