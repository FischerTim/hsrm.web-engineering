import React, { useContext } from 'react'

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Ressources } from '../Services/Ressources';

export function RegisterPage() {

  const { register, handleSubmit, errors } = useForm();
  const ressources = new Ressources().get()

  const onSubmit = data => { console.log("hi") }


  return (<div>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="Username" defaultValue="Enter your Username" ref={register} />

      <input name="Password" defaultValue="Enter your Password" ref={register({ required: true })} />
      <input name="PasswordValidation" defaultValue="Enter your Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
      <Link to={ressources.Path.Login}>{ressources.RegisterData.LoginLink}</Link>
    </form></div>)
}