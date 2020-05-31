import React, { useContext } from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';

export function LoginPage(props) {

  const pathHistory = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const { setUser } = useContext(UserContext)
  const { userService } = useContext(UserServiceContext)
  const { ressourcen } = useContext(RessourcenContext)

  const onLogin = (data) => {
    
    userService.login(data.Username, data.Password).then((user) => {
      if (user.logedIn) {
        setUser(user)
        pathHistory.push(ressourcen.Path.Core)
      }
    })

  }

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