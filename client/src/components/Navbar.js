import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    
    if (props.loggedIn){
        return (
            <div className='nav-container'>
                <div>          
                    <NavLink to='/' className="nav-link"> Home </NavLink>
                    <NavLink to='/posts' className="nav-link"> View all Secret Posts </NavLink>
                    <button className="logout-button" onClick={props.logoutUser}>Logout</button>
                </div>
            </div>
        )
    } else{
        return (
            <div className='nav-container'>
                <div className='nav'>
                    <Link to="/signup">
                        <button className="login-button">Signup</button>
                    </Link>
                    <br/>
                    <Link to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                </div>
                <br/>
                <hr></hr>
            </div>
        )
    }
}

export default Navbar;
