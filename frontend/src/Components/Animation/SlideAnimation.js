import React from 'react';
import Slide from '@material-ui/core/Slide';
import { Image } from 'react-bootstrap';


export function SlideAnimation({animationKill, path}){
    console.log("erstellt")
    const timer=1000
   
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const doSomething = async () => {
        await sleep(timer)
        animationKill()
        console.log("test")
      }
      
      doSomething()
      

    

    return(
        <div>
        <Slide direction="right" timeout={timer} in={true} mountOnEnter unmountOnExit>
            <Image src={path} fluid/> 
        </Slide>
        </div>
    )
}