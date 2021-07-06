import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from '.'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if(r.ok) {
        r.json()
        .then( u => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
  }, [])


  const LoginUser= (u) => {
    setLoggedIn(true)
    setUser(u)
    history.push('/')
  }

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      console.log('logged out')
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div className="App">
      <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} loginUser={LoginUser}/>}/>
        <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={LoginUser}/>}/>
      </Switch>
    </div>
  );
}

export default App;
