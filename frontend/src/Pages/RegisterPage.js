import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import { RessourcenContext } from '../Context/RessourcenContext';

export function RegisterPage() {
  
  const { register, handleSubmit, errors } = useForm();
  const { ressourcen } = useContext(RessourcenContext)
  let registerEmail = React.useRef(null)
  let registerPassword = React.useRef(null)
  let confirmPassword = React.useRef(null)

  const onRegister = data => { 
    console.log('Email: ' + registerEmail.current.value)
    console.log('Password: ' + registerPassword.current.value)
    console.log('Password confirm: ' + confirmPassword.current.value)
  }
  
  return (<div>
    <Container>
      <form className="text-center" onSubmit={handleSubmit(onRegister)}>
        <Row>
          <Col xs={6} md={4}></Col>

          <Col xs={6} md={4}>      
              <Form.Group controlId="formBasicEmail"><br />
  <h2>{ressourcen.LoginData.Username}</h2>
                <Form.Text className="text-muted">
                    Create your Account. It's free and only takes a minute.
                </Form.Text><br /><br />
                <Form.Control type="email" placeholder="Enter Email" className="text-center" ref={registerEmail} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter Password" className="text-center" ref={registerPassword} />
                <Form.Control type="password" placeholder="Confirm Password" className="text-center" ref={confirmPassword} />
              </Form.Group><br />
              <Button variant="primary" type="submit">
                Register Now
              </Button>
          </Col>

          <Col xs={6} md={4}></Col>
        </Row>
      </form>
    </Container>
    </div>)
}

 {/*
    <form onSubmit={handleSubmit(onRegister)}>

      <input name="Username" defaultValue="Username" ref={register} />

      <input name="Password" defaultValue="Password" ref={register({ required: true })} />
      <input name="PasswordValidation" defaultValue="Confirm Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    */}
