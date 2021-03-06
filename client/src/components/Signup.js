import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = ({loginUser}) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/signup",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
              username: username,
              password: password,
              passwordConfirmation: passwordConfirmation
          })
        })
        .then (resp => resp.json())
        .then (user => loginUser(user))
    }

    return (
        <div>
            <form className="sign-up" onSubmit={handleSubmit}>
                <label> Username:</label>
                <br/>
                <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                <br/>
                <br/>
                <label> Password:</label>
                <br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <br/>
                <label> Confirm Password:</label>
                <br/>
                <input type="password" id="password_confirm" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <br/>
                <input className="button" type="submit"/>
                <Link to={`/`} className='form-title'>
                    <h3>Back</h3>
                </Link>
            </form>
        </div>
    )
}

export default Signup;