import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {

    if (props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
                <button onClick={props.logoutUser}>Logout</button>
                <br/>
                <Link to="/posts">
                    <button>View all Secret Posts</button>
                </Link>
            </div>
        )
    } else{
        return (
            <div>
                <br/>
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
                <br/>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        )
    }
}

export default Navbar;