import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo hide-on-med-and-down">Exercise Tracker</Link>
                <ul className="right">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/create'>Create Exercise Log</NavLink></li>
                    <li><NavLink to='/user'>Sign Up</NavLink></li>
                    <li><NavLink to='/' className="btn btn-floating pink lighten-1">ET</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;