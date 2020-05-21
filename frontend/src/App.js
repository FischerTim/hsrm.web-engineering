import React from 'react';
import './App.css';


function App() {

  //const test = {'grant_type':'','username' : 'post1mantest','password' : 'pw123', 'scope':'','client_id':'', 'client_secret':''}
  var myToken = ""
  const userAction = async () => {
    const response = await fetch('http://server.bykovski.de:8000/users/token', {
      method: 'POST',
      headers: {
        "Accept" :"application/json"  ,
        "Content-Type" : 'application/x-www-form-urlencoded'
    },
      body: JSON.stringify("&username=post1mantest&password=pw123&"),
      
  });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    myToken = myJson.access_token

    console.log('ws://server.bykovski.de:8000/game/click?token=\"'+ myToken +'\"')
  }
  const socket = new WebSocket('ws://server.bykovski.de:8000/game/click?token=\"'+ myToken +'\"');

  socket.onopen=function(event){
    socket.send("Hey Server");
  };

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

  userAction()

  return (
    <div className="src/App">
      <button onClick={()=> userAction()}>click mich pls</button>
      
    </div>
  )
}

export default App;
