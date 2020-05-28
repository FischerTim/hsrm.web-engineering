import React from 'react'
import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history';

import { UserContext } from './Context/UserContext'
import { LoginModul } from './Pages/Login/LoginModul'
import { RegisterModul } from './Pages/Register/RegisterModul'

import { Home } from './Pages/Home/Home'


function App() {
  
  const { user } = useContext(UserContext)
  let history = createBrowserHistory()
  
  //if (! user.isLogedIn() && ! history.location.pathname.startsWith('/register')){
    
    //history.pushState(null,'/login')
    //window.location.reload()
  //}
 
  return (
    <div className="src/App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginModul/>
          </Route>
          <Router path="/home">
            <Home></Home>
          </Router>
          <Router path="/register">
            <RegisterModul/>
          </Router>
          <Route path="/">
            <LoginModul/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
