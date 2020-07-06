
import React, { useContext, useState } from 'react'

import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';

import { UserService } from '../../Services/UserService';


export function RegisterPage() {

  const pathHistory = useHistory()
  const { handleSubmit } = useForm();
  const { ressources } = useContext(RessourcesContext)

  let registerUsername = React.useRef(null)
  let registerPassword = React.useRef(null)
  let confirmPassword = React.useRef(null)

  const [warnText, setText] = useState('');

  const onRegister = async () => {

    if (registerPassword.current.value === confirmPassword.current.value) {
      try {

        // register account
        UserService.register(registerUsername.current.value, registerPassword.current.value)

        // go to login page
        pathHistory.push(ressources.Path.Login)

      } catch (e) {

        //TODO error handling !!!
        console.log(await e)
      }

    } else {

      // TODO error handlinh 
      setText(ressources.Register.RegisterWarningPassword)
    }
  }

  return (<div>
    <Container>
      <form className="text-center" onSubmit={handleSubmit(onRegister)}>
        <Row>
          <Col xs={6} md={4}></Col>

          <Col xs={6} md={4}>
            <Form.Group><br />
              <h2>{ressources.Register.RegisterHeader}</h2>
              <Form.Text className="text-muted">
                {ressources.Register.RegisterText}
              </Form.Text><br /><br />
              <Form.Control type="text" placeholder={ressources.Register.UserField} className="text-center" ref={registerUsername} />
              <Form.Text className="text-muted">
                {ressources.Register.InfoText}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder={ressources.Register.PasswordField} className="text-center" ref={registerPassword} />
              <Form.Control type="password" placeholder={ressources.Register.PasswordConfirm} className="text-center" ref={confirmPassword} /><br />
              <h6 style={{color : 'red'}}>{warnText}</h6>
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