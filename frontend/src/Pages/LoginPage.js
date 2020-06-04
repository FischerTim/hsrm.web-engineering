import React, { useContext } from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';
import { ConnectionServiceContext } from '../Context/ConnectionServiceContext';
import { ConnectionContext } from '../Context/ConnectionContext';
import { PointsContext } from '../Context/PointsContext';
import { GPPSContext } from '../Context/GPPSContext';

export function LoginPage(props) {

  const pathHistory = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const { setUser } = useContext(UserContext)
  const { userService } = useContext(UserServiceContext)
  const { ressourcen } = useContext(RessourcenContext)
  const { connectionService } = useContext(ConnectionServiceContext)
  const { setConnection } = useContext(ConnectionContext)
  const { setPoints } = useContext(PointsContext)
  const { setGPPS } = useContext(GPPSContext)

  const onSendButtonPressed = (data) => {
    //TODO logout
    userService.login(data.Username, data.Password).then((user) => {

      if (user.LogedIn) {
        setUser(user)
        const newConnection = connectionService.getConnection(user)

        newConnection.Click.addEventListener('message', function (event) {
          console.log("test")
        });
        newConnection.GPPS.addEventListener('message', function (event) {
          setGPPS(JSON.parse(event.data)["points"])
        });
        newConnection.Points.addEventListener('message', function (event) {
          setPoints(JSON.parse(event.data)["points"])
        });

        setConnection(newConnection)

        pathHistory.push(ressourcen.Path.Core)
      }
    })

  }

  return (<div>
    <form onSubmit={handleSubmit(onSendButtonPressed)}>

      <input name="Username" defaultValue="post1mantest" ref={register} />

      <input name="Password" defaultValue="pw123" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>

    <Link to={ressourcen.Path.Register}>{ressourcen.LoginData.RegisterData}</Link>

  </div>
  )
} 