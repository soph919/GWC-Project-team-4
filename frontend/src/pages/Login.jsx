import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        const data = await login()

        console.log(data)


        //Successful login
        if(data.message == "Login successful") {
            setMessage(data.message)
            navigate("/user")
            
        //Unsuccessful login
        } else {
            setMessage(data.message)
        }
        
        console.log(user)

    }
    
    const login = async () => {

        try {
            const res = await fetch("http://localhost:5001/account/login", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email, password:password})
            })

            const response = await res.json();

            return response
        } catch(error) {
            console.log(error)
        }
    }
        
    
  return (
    <div>
        <h1>Login</h1>

     <form>
        <label htmlFor="user">Email:</label>
        <input onChange={(e)=> setEmail(e.target.value)} type="text" id="user" name="user" />

        <label htmlFor="pass">Password:</label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" id="pass" user="pass"/>

        <input type="submit" value="Login" onClick={(e) => handleSubmit(e)}/>
        
    </form>


    <div className="message">{message ? <p>{message}</p>: null}</div>

    <a href="/signup">Don't have an account?</a> 
    </div>
  )
}
export default Login


