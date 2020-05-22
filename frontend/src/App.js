import React from 'react'
import { useContext ,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import { createBrowserHistory } from 'history';

import { UserContext } from './Context/UserContext'
import { LoginModul } from './Pages/Login/LoginModul'
import { RegisterModul } from './Pages/Register/RegisterModul'

import { Home } from './Pages/Home/Home'

function App() {
  useEffect(() => {
    if (user.isLogedIn() && ! history.location.pathname.startsWith('/register')){
      console.log( history.location.pathname)
      history.push('/login')
    }
  })
  const { user, setUser } = useContext(UserContext)
  let history = createBrowserHistory()

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
