import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginPage } from './Pages/Body/LoginPage'
import { RegisterPage } from './Pages/Body/RegisterPage'
import { CorePage } from './Pages/Body/CorePage'

import { CustomNavBar } from './Pages/Head/CustomNavBar'
import { RessourcesContext } from './Context/Ressource/RessourcesContext'

function App() {

  const {ressources} = useContext(RessourcesContext)

  return (
    <div className="src/App">
      
      <Router>
      <CustomNavBar/>
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
