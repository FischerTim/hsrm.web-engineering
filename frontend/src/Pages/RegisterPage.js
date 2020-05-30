import React from 'react'
import { useForm } from "react-hook-form";

export function RegisterPage() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => { console.log("hi") }
  return (<div>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="Username" defaultValue="Enter your Username" ref={register} />

      <input name="Password" defaultValue="Enter your Password" ref={register({ required: true })} />
      <input name="PasswordValidation" defaultValue="Enter your Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form></div>)
}