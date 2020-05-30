import React, { useContext, useState , useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { UserContext } from '../Context/UserContext'
import { RessourceContext } from '../Context/RessourceContext'


export function CorePage() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const ressource = useContext(RessourceContext)
//-------
    const SERVER_ADDRESS = "server.bykovski.de"
    const PASSWORD = "pw123"
    const USERNAME = "post1mantest"

  const [clicks, setClicks] = useState(0);
  let clickSocket
  let balanceSocket
//-------
    if (! user.isLogedIn()) {
        pathHistory.push(ressource.Path("Login"))
    }else{
        
        
    }

    const logout = () => {
        if (user.isLogedIn()) {
            setUser(user.logout())
            pathHistory.push(ressource.Path("Login"))
        }
    }
    useEffect(() => {
        if (user.isLogedIn() ){
            
            clickSocket = new WebSocket(`ws://${SERVER_ADDRESS}:8000/game/click?token=${user.getToken()}`)
            balanceSocket = new WebSocket(`ws://${SERVER_ADDRESS}:8000/game/balance?token=${user.getToken()}`)
            clickSocket.addEventListener('message', function (event) { 
                console.log("test")
            });
            balanceSocket.addEventListener('message', function (event) { 
                setClicks(JSON.parse(event.data)["points"])
            });
        }
        
        return () => {
          clickSocket.close()
          balanceSocket.close()
        }
      })

      const oniwas = () =>{
          if(clickSocket == undefined){
            console.log("hier")
            return
          }
        if (clickSocket.readyState !== 1){
            clickSocket.onopen = function () {
                clickSocket.send(' '); // Send the message 'Ping' to the server
              };
        }else{
            clickSocket.send(" ")
        }
      }
    return (
        <div>
            <p><label>{clicks}</label></p>
            <button onClick={oniwas}>click mich pls</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}
