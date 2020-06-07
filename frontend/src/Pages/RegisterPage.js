import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { RessourcenContext } from '../Context/RessourcenContext';

export function RegisterPage() {

  const { register, handleSubmit, errors } = useForm();
  const { ressourcen } = useContext(RessourcenContext)
  let registerEmail = React.useRef(null)
  let registerPassword = React.useRef(null)
  let confirmPassword = React.useRef(null)

  const onRegister = data => {
    console.log('Email: ' + registerEmail.current.value)
    
    if (registerPassword.current.value != confirmPassword.current.value) {
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
              <h2>{ressourcen.RegisterData.RegisterHeader}</h2>
              <Form.Text className="text-muted">
                {ressourcen.RegisterData.RegisterText}
              </Form.Text><br /><br />
              <Form.Control type="email" placeholder={ressourcen.RegisterData.EmailField} className="text-center" ref={registerEmail} />
              <Form.Text className="text-muted">
                {ressourcen.RegisterData.EmailText}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder={ressourcen.RegisterData.PasswordField} className="text-center" ref={registerPassword} />
              <Form.Control type="password" placeholder={ressourcen.RegisterData.PasswordConfirm} className="text-center" ref={confirmPassword} />
            </Form.Group><br />
            <Button variant="primary" type="submit">
              {ressourcen.RegisterData.RegisterButton}
            </Button><br /><br />
            <Link to={ressourcen.Path.Login}>{ressourcen.RegisterData.LoginLink}</Link>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </form>
    </Container>
  </div>)
}