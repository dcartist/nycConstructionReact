import React, { Component } from 'react';
import './Style.css'
import {Route, Link, Redirect} from "react-router-dom";
import Logo from './components/Logo/new-york-skyline-silhouette.png'

class Navigation extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li className="Logo"><img src={Logo} alt="NYC contractor logo"></img> NY CL</li>
                    {/* <li className="Logo"><img src="./new-york-skyline-silhouette.png"></img> NY CONTRACTOR LIST</li> */}
                    <li> ➤ <Link to="/">Home </Link></li>
                    <li> ➤ <Link to="/about">About</Link></li>
                    <li> ➤ <Link to="/jobs">Job Listing </Link></li>
                    <li> ➤ <Link to="/contractor">Contractors Listing </Link></li>
                    <li> ➤ <Link to="/create">Create</Link></li>
                    {/* <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li> */}

                    {/* <li><Link to="/delete">Delete</Link></li>
                    <li><Link to="/update">update</Link></li> */}
            </ul>                       
                
            </div>
        );
    }
}

export default Navigation;