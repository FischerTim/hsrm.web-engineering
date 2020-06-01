import React, { useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { UserContext } from '../Context/UserContext'
import { RessourcenContext } from '../Context/RessourcenContext';
import { UserServiceContext } from '../Context/UserServiceContext';

export function CorePage() {

    const pathHistory = useHistory()

    const { user, setUser } = useContext(UserContext)
    const { userService } = useContext(UserServiceContext)
    const { ressourcen } = useContext(RessourcenContext)

    //------- start

    // const [clicks, setClicks] = useState(0);
    //let clickSocket
    //et balanceSocket
    //-------end 
    console.log(user)
    if (!user.logedIn) {
        pathHistory.push(ressourcen.Path.Login)
    }

    const logout = () => {

        if (user.logedIn) {
            setUser(userService.logout())
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
