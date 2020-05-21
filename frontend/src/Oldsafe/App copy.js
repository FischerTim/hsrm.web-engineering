import React, { useState, useEffect }  from 'react';
import './App.css';
import './NewStuff/Infobox'
import { infobox } from './NewStuff/Infobox';
function App() {
  
  
  //const test = {'grant_type':'','username' : 'post1mantest','password' : 'pw123', 'scope':'','client_id':'', 'client_secret':''}
  const SERVER_ADDRESS = "server.bykovski.de"
  const PASSWORD = "pw123"
  const USERNAME = "post1mantest"
  const [clicks, setClicks] = useState(0);
  let userToken
  let clickSocket
  let balanceSocket

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
        
        setClicks(JSON.parse(event.data)["points"])
      });
  
    })
    return () => {
      clickSocket.close()
      balanceSocket.close()
    }
  });

// Connection opened
  
  const clicked = () =>{
    clickSocket.send(' ');
  }

  return (
    <div className="src/App">
      <p><label>{clicks}</label></p>
      <button onClick={()=> clicked()}>click mich pls</button>
      <infobox></infobox>
    </div>
  )
}

export default App;
