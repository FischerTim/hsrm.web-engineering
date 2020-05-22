import React ,{useContext} from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useForm } from "react-hook-form";

import { UserContext } from '../../Context/UserContext'

export function LoginModul(){
    const { user, setUser } = useContext(UserContext)
    
    const { register, handleSubmit, errors } = useForm();
    let history = createBrowserHistory()

    const onLogin = data => {
        user.login(data.Username,data.Password).then( (newUser) =>{
            if (newUser.isLogedIn()){
                history.push('/home')
                setUser(newUser) 
            }  
        })
    }

    console.log("current User State: "+user.isLogedIn())
    console.log("current path : "+history.location.pathname)

    return (<div>
      
    <form onSubmit={handleSubmit(onLogin)}>
   
      <input name="Username" defaultValue="Enter your Username" ref={register} />
      
      <input name="Password" defaultValue="Enter your Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

    <Link to="/register">iwas</Link>
    {user.isLogedIn()}
    <Router>
        <Switch>
          <Route path="/home">
            <label>es wird das gemalt wenn path aktuallisiert</label>
          </Route>
        </Switch>
    </Router>
    </div>
    )
} 