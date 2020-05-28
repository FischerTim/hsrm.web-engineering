import React ,{useContext} from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../Context/UserContext'
import { SpracheContext } from '../../Context/SprachContext'
import { iwasDE,iwasEN } from '../../Propertys/Iwas';

export function LoginModul(props){
    const { user, setUser } = useContext(UserContext)
    const {sprache} = useContext(SpracheContext)
    const kp = sprache == "DE" ? iwasDE : iwasEN

    console.log(kp)
    const hist = useHistory()
    const { register, handleSubmit, errors } = useForm();

    const onLogin = data => {
      
        user.login(data.Username,data.Password).then( (newUser) =>{

            if (newUser.isLogedIn()){         
              setUser(newUser) 
              hist.push('/home')
            }  
        })

      }

    return (<div>
    <form onSubmit={handleSubmit(onLogin)}>
   
      <input name="Username" defaultValue={kp["hallo"]} ref={register} />
      
      <input name="Password" defaultValue="Enter your Password" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

    <Link to="/register">iwas</Link>
  
    </div>
    )
} 