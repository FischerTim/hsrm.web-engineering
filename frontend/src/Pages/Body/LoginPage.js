import React, { useContext, useState } from 'react'

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { PointsContext } from '../../Context/Statistics/PointsContext';
import { GPPSContext } from '../../Context/Statistics/GPPSContext';
import { UserContext } from '../../Context/UserContext'
import { GeneratorsContext } from '../../Context/Lists/GeneratorsContext';
import { UpdatesContext } from '../../Context/Lists/UpdatesContext';
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';

import { UserService } from '../../Services/UserService';
import { ConnectionService } from '../../Services/ConnectionService';


export function LoginPage() {

  const { setUser } = useContext(UserContext)
  const { setGenerators } = useContext(GeneratorsContext)
  const { setUpdates } = useContext(UpdatesContext)
  const { setPoints } = useContext(PointsContext)
  const { setGPPS } = useContext(GPPSContext)
  const pathHistory = useHistory()
  const { handleSubmit } = useForm();

  const { ressources } = useContext(RessourcesContext)

  let loginUserName = React.useRef(null)
  let loginPassword = React.useRef(null)

  const [warnText, setText] = useState('');

  const onSendButtonPressed = async () => {

    try {
      
      // get login token
      const response = await UserService.login(loginUserName.current.value, loginPassword.current.value)
      const newUser = UserService.getUserObject(loginUserName.current.value, await response.access_token, true)

      // connect to web wockets
      newUser.Connections = ConnectionService.getConnectedSockets(newUser.Token)

      // add event listener
      ConnectionService.addEventsToSockets(
        newUser.Connections,
        (event) => { setGPPS(JSON.parse(event.data)["points"]) },
        (event) => { setPoints(JSON.parse(event.data)["points"]) })

      // get generator list
      const newGeneratorList = await UserService.getGenerators(newUser.Token)
      setGenerators(await newGeneratorList)

      // get upgrade list
      const newupgradeList = await UserService.getUpgrades(newUser.Token)
      setUpdates(await newupgradeList)

      // set user 
      setUser(newUser)

      // go To Core Page
      pathHistory.push(ressources.Path.Core)

    } catch (e) {
      //TODO error handling !!!
      console.log(await e)
      setText(ressources.Login.LoginWarning)
    }

    //--------------------old
    //userService.login(loginEmail.current.value, loginPassword.current.value)
    //  .then(() => { pathHistory.push(ressources.Path.Core) })
    //  .catch()
    //------------------------------------------
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
              <Form.Control type="text" placeholder={ressources.Login.UserField} className="text-center" ref={loginUserName} />
              <Form.Control type="password" placeholder={ressources.Login.PasswordField} className="text-center" ref={loginPassword} /><br />
              <h6 style={{ color: 'red' }}>{warnText}</h6>
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
