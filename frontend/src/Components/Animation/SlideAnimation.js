import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { Image } from 'react-bootstrap';


export function SlideAnimation({ path }) {
  const timeout = 1000
  const [showComponent, setShowComponent] = useState(false)

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const deleteAfterTimeout = async () => {
    await sleep(timeout)
    setShowComponent(true)
  }

  deleteAfterTimeout()


  if (showComponent) {
    return <div></div>
  } else {
    return (
      <div>
        <Slide direction="right" timeout={timeout} in={true} mountOnEnter unmountOnExit>
          <Image width="40" src={path} fluid />
        </Slide>
      </div>
    )
  }
}