import React ,{useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import { useHistory } from 'react-router-dom'

 export function Home() {
    let history = useHistory()
    const { user, setUser } = useContext(UserContext)
    if (!user.isLogedIn()){
        history.push("/login")
    }
    const logout = () => {
        
        if (user.isLogedIn()){
            
                setUser(user.logout())
                history.push('/login')
         }
    }

    return (<div>
        <button onClick={logout}>logout</button>
    </div>)
}
