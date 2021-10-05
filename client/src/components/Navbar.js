import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    
    if (props.loggedIn){
        return (
            <div>
                <br/>
                <NavLink to='/' className="nav-link"> Home </NavLink>
                <NavLink to='/posts' className="nav-link"> View all Secret Posts </NavLink>
                <button className="logout-button" onClick={props.logoutUser}>Logout</button>
                <hr/>
            </div>
        )
    } else{
        return (
            <div>
                <br/>
                <Link to="/signup">
                    <button className="button">Signup</button>
                </Link>
                <br/>
                <Link to="/login">
                    <button className="button">Login</button>
                </Link>
            </div>
        )
    }
}

export default Navbar;
