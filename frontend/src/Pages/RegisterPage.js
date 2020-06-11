
import React  from 'react'

import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


import { Link } from 'react-router-dom';

import { RessourceService } from '../Services/RessourceService';
export function RegisterPage() {

  const { handleSubmit } = useForm();
  const ressources = new RessourceService().get()
  let registerEmail = React.useRef(null)
  let registerPassword = React.useRef(null)
  let confirmPassword = React.useRef(null)

  const onRegister = data => {
    console.log('Email: ' + registerEmail.current.value)
    
    if (registerPassword.current.value !== confirmPassword.current.value) {
      // TODO ERROR
      console.log('Password: ' + registerPassword.current.value)
      console.log('not same: ' + confirmPassword.current.value)
    }
  }

  return (<div>
    <Container>
      <form className="text-center" onSubmit={handleSubmit(onRegister)}>
        <Row>
          <Col xs={6} md={4}></Col>

          <Col xs={6} md={4}>
            <Form.Group controlId="formBasicEmail"><br />
              <h2>{ressources.Register.RegisterHeader}</h2>
              <Form.Text className="text-muted">
                {ressources.Register.RegisterText}
              </Form.Text><br /><br />
              <Form.Control type="email" placeholder={ressources.Register.UserField} className="text-center" ref={registerEmail} />
              <Form.Text className="text-muted">
                {ressources.Register.EmailText}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder={ressources.Register.PasswordField} className="text-center" ref={registerPassword} />
              <Form.Control type="password" placeholder={ressources.Register.PasswordConfirm} className="text-center" ref={confirmPassword} />
            </Form.Group><br />
            <Button variant="primary" type="submit">
              {ressources.Register.RegisterButton}
            </Button><br /><br />
            <Link to={ressources.Path.Login}>{ressources.Register.LoginLink}</Link>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </form>
    </Container>
  </div>)
}