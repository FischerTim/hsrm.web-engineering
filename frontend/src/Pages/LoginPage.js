import React, { useContext } from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';

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

  let loginEmail = React.useRef(null)
  let loginPassword = React.useRef(null)

  const onSendButtonPressed = (data) => {
    //TODO logout
    console.log('email ' + loginEmail.current.value)
    console.log('password ' + loginPassword.current.value)
    userService.login(loginEmail.current.value, loginPassword.current.value).then((user) => {

      if (user.LogedIn) {
        setUser(user)
        const newConnection = connectionService.getConnection(user)

        newConnection.Click.addEventListener('message', function (event) {
          console.log("Click Response To check if click works. in LoginPage")
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
    <Container>
      <form className="text-center" onSubmit={handleSubmit(onSendButtonPressed)}>
        <Row>
          <Col xs={6} md={4}></Col>

          <Col xs={6} md={4}>
            <Form.Group controlId="formBasicEmail"><br />
              <h2>{ressourcen.LoginData.LoginHeader}</h2>
              <Form.Text className="text-muted">
              </Form.Text><br /><br />
              <Form.Control type="text" placeholder={ressourcen.LoginData.EmailField} className="text-center" ref={loginEmail} />
              <Form.Control type="password" placeholder={ressourcen.LoginData.PasswordField} className="text-center" ref={loginPassword} />
            </Form.Group><br />
            <Button variant="primary" type="submit">
              {ressourcen.LoginData.LoginButton}
            </Button><br /><br />
            <Link to={ressourcen.Path.Register}>{ressourcen.LoginData.RegisterData}</Link>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </form>
    </Container>
  </div>
  )
} 