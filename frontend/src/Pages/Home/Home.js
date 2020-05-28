import React ,{useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import { createBrowserHistory } from 'history'

export function Home() {
    let history = createBrowserHistory()
    const { user, setUser } = useContext(UserContext)

    const logout = () => {
        // if (user.isLogedIn()){
        //     setUser(user.logout())
        //     history.push('/login')
        // }
    }

    return <div>
        <button onClick={logout()}>logout</button>
    </div>
}