import React, { useState } from 'react'

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
            <form onSubmit={handleSubmit}>
                <label> Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                <label> Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label> Confirm Password:</label>
                <input type="text" id="password_confirm" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <input type="submit"/>
            </form>
        </div>
    )
}


export default Signup;