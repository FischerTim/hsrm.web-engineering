import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
//import { MDBAnimation } from "mdbreact";
import { Image, Container } from 'react-bootstrap';


export function SlideAnimation({ path, style }) {
  const timeout = 5000
  const [showComponent, setShowComponent] = useState(false)

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const deleteAfterTimeout = async () => {
    await sleep(timeout)
    setShowComponent(true)
  }

  deleteAfterTimeout()

  const slideStyle = {
    display: "flex",
    justifycontent: "bottom",
    alignitems: "bottom"
  };

  if (showComponent) {
    return <div ></div>
  } else {
    return (
      <div style={style} >
        <Container>
          <Slide direction="right" timeout={timeout} in={true} mountOnEnter unmountOnExit>
            <Image style={slideStyle} width="50" src={path} fluid />
          </Slide>
        </Container>
      </div>
    )
  }
}

/**
  <Slide direction="right" timeout={timeout} in={true} mountOnEnter unmountOnExit>
    <Image style={slideStyle} width="50" src={path} fluid />
  </Slide>

  <MDBAnimation type="slideOutRight">
    <Image style={slideStyle} width="50" src={path} fluid />
  </MDBAnimation>
*/