import React from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserManger } from '../Services/UserManger';
import { Ressources } from '../Services/Ressources';

export function LoginPage(props) {

  const pathHistory = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const ressources = new Ressources().get()
  const userManger = new UserManger(ressources.Backend)
  const onSendButtonPressed = (data) => {
    userManger.login(data.Username, data.Password)
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

    <Link to={ressources.Path.Register}>{ressources.LoginData.RegisterData}</Link>

  </div>
  )
} 