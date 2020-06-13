import React from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { UserService } from '../Services/UserService';
import { RessourceService } from '../Services/RessourceService';

export function LoginPage(props) {

  const pathHistory = useHistory()
  const { handleSubmit } = useForm();

  const ressources = new RessourceService().get()
  const userService = new UserService(ressources.Server)

  let loginEmail = React.useRef(null)
  let loginPassword = React.useRef(null)

  const onSendButtonPressed = () => {
    userService.login(loginEmail.current.value, loginPassword.current.value)
      .then(() => { pathHistory.push(ressources.Path.Core) })
      .catch() 
  }


  return (<div>
    <Container>
      <form className="text-center" onSubmit={handleSubmit(onSendButtonPressed)}>
        <Row>
          <Col xs={6} md={4}></Col>

          <Col xs={6} md={4}>
            <Form.Group><br />
              <h2>{ressources.Login.LoginHeader}</h2>
              <Form.Text className="text-muted">
              </Form.Text><br /><br />
              <Form.Control type="text" placeholder={ressources.Login.UserField} className="text-center" ref={loginEmail} />
              <Form.Control type="password" placeholder={ressources.Login.PasswordField} className="text-center" ref={loginPassword} />
            </Form.Group><br />
            <Button variant="primary" type="submit">
              {ressources.Login.LoginButton}
            </Button><br /><br />
            <Link to={ressources.Path.Register}>{ressources.Login.Register}</Link>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </form>
    </Container>
  </div>
  )
} 