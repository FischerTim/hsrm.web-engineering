import React, { useContext } from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from '../Context/UserContext'
import { RessourceContext } from '../Context/RessourceContext';


export function LoginPage(props) {
  const pathHistory = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const { user, setUser } = useContext(UserContext)
  const { ressource } = useContext(RessourceContext)

  const onLogin = (data) => {

    user.login(data.Username, data.Password).then((newUser) => {

      if (newUser.isLogedIn()) {
        setUser(newUser)
        pathHistory.push(ressource.Path().Core)
      }
    })

  }
  // change to Ressource ...
  return (<div>
    <form onSubmit={handleSubmit(onLogin)}>

      <input name="Username" defaultValue="post1mantest" ref={register} />

      <input name="Password" defaultValue="pw123" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>

    <Link to="/register">iwas</Link>

  </div>
  )
} 