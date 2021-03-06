import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import PostList from './components/PostList';
import Post from './components/Post';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()
  const [loginError, setLoginError] = useState("")

  useEffect(() => {
    fetch('/me')
    .then(response => {
      if(response.ok) {
        response.json()
        .then( user => {
          setLoggedIn(true)
          setUser(user)
        })
      }else{
        setLoginError(response.statusText)
      }
    })
  }, [])

  const LoginUser= (u) => {
    if(u.error == "Invalid username or password"){
      setLoggedIn(false)
      alert(loginError);
    }else if (u.error == "Internal Server Error"){
      setLoggedIn(false)
      alert("Please make sure the signup form is correct. It should include a username, and matching passwords.");
    }else{
      setLoggedIn(true)
      setUser(u)
      history.push('/')
    }
  }

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      setLoggedIn(false) 
      setUser({})
    }) 
    history.push('/')
  }

  return (
    <div className="App">
      <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser} loginError={loginError}/>
      <Switch>
        <Route exact path="/" render={routerProps => <Home {...routerProps} loggedIn={loggedIn} user={user}/>}/>
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} loginUser={LoginUser}/>}/>
        <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={LoginUser} />}/>
        <Route exact path="/posts" render={routerProps => <PostList {...routerProps} user={user} loggedIn={loggedIn}/>}/>
        <Route exact path="/posts/:id"  component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
