import React ,{useContext,useState} from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useForm } from "react-hook-form";

import { UserContext } from '../../Context/UserContext'
export function LoginModul(){


    const { user, setUser } = useContext(UserContext)

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data.Username)
        user.login(data.Username,data.Password).then( (newUser) =>{
            if (newUser.isLogedIn()){
                console.log("login")
                setUser(newUser) 
            }  
        })
    }

    let history = createBrowserHistory()
    
    if (user.isLogedIn()){
       history.push('/home')
       window.location.reload();
    }

    return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="Username" defaultValue="Enter your Username" ref={register} />
      
      <input name="Password" defaultValue="Enter your Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    <Link to="/register">iwas</Link>
    </div>
    )
} 