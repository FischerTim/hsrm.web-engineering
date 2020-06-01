import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';
import { ConnectionContext } from '../Context/ConnectionContext';
import { ConnectionServiceContext } from '../Context/ConnectionServiceContext';

export function CorePage() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const { userService } = useContext(UserServiceContext)
    const { ressourcen } = useContext(RessourcenContext)
    const { connectionService } = useContext(ConnectionServiceContext)
    const { connection, setConnection } = useContext(ConnectionContext)
    //------- start

    // const [clicks, setClicks] = useState(0);
    //let clickSocket
    //et balanceSocket
    //-------end 
    console.log()
    if (!user.LogedIn) {
        pathHistory.push(ressourcen.Path.Login)
    } else {
        connection.Click.addEventListener('message', function (event) {
            console.log("test")
        });
    }

    const logout = () => {

        if (user.LogedIn) {
            setUser(userService.logout())
            setConnection(connectionService.disconnected(connection))
            pathHistory.push(ressourcen.Path.Login)

        }
    }
    //----- start

    // useEffect(() => {
    /*
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
        if (typeof clickSocket == WebSocket){
            clickSocket.close()
            balanceSocket.close()
        }
      
    }*/
    //})

    const oniwas = () => {
        if (connection.Click != null && connection.Click.readyState === 1) {
            connection.Click.send("")
        }

        /*
        if (clickSocket == undefined) {
            return
        }
        if (clickSocket.readyState !== 1) {
            clickSocket.onopen = function () {
                clickSocket.send(' '); // Send the message 'Ping' to the server
            };
        } else {
            clickSocket.send(" ")
        }*/
    }
    // ------end <p><label>{clicks}</label></p>
    return (
        <div>

            <button onClick={oniwas}>click mich pls</button>
            <button onClick={logout}>logout</button>
        </div>
    )
}
