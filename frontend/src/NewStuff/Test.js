import React,{useContext,useEffect}from 'react'
import {PointContext} from "../Content/PointContext"

export function Test(){
const SERVER_ADDRESS = "server.bykovski.de"
  const PASSWORD = "pw123"
  const USERNAME = "post1mantest"
  
  let userToken
  let clickSocket
  let balanceSocket

  const seti = useContext(PointContext).get("Points")[1];


  const userAction = async () => {
    const response = await fetch(`http://${SERVER_ADDRESS}:8000/users/token`, {
      method: 'POST',
      headers: {
        "Accept" :"application/json"  ,
        "Content-Type" : 'application/x-www-form-urlencoded'
    },
      body: JSON.stringify(`&username=${USERNAME}&password=${PASSWORD}&`)
      
  });
    const jsonResponse  = await response.json() 
    userToken = jsonResponse.access_token
    clickSocket = new WebSocket(`ws://${SERVER_ADDRESS}:8000/game/click?token=${userToken}`)
      balanceSocket = new WebSocket(`ws://${SERVER_ADDRESS}:8000/game/balance?token=${userToken}`)
  }

  useEffect(() => {
    userAction().then(() =>{
      

      clickSocket.addEventListener('message', function (event) {
        console.log('clicks added:', event.data);
      });
  
      balanceSocket.addEventListener('message', function (event) {
        console.log('current clicks: ',event.data)
        seti(JSON.parse(event.data)["points"])
      });
  
    })
    return () => {
      clickSocket.close()
      balanceSocket.close()
    }
  });
  const clicked = () =>{
    clickSocket.send(' ');
  }
  return (<div><button onClick={()=> clicked()}>click mich pls</button></div>)
    
}