import React from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserService } from '../Services/UserService';
import { RessourceService } from '../Services/RessourceService';

export function LoginPage(props) {

  const pathHistory = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const ressources = new RessourceService().get()
  const userService = new UserService(ressources.Server)

  const onSendButtonPressed = (data) => {
    userService.login(data.Username, data.Password)
      .then(() => { pathHistory.push(ressources.Path.Core) })
      .catch()
  }


  return (<div>
    <form onSubmit={handleSubmit(onSendButtonPressed)}>

      <input name="Username" defaultValue="post1mantest" ref={register} />

      <input name="Password" defaultValue="pw123" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>

    <Link to={ressources.Path.Register}>{ressources.Login.Register}</Link>

  </div>
  )
} 