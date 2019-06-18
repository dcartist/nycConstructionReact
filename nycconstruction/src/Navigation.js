import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <p>Navigation</p>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/jobs">Job Listing </Link></li>
                </ul>
                
            </div>
        );
    }
}

export default Navigation;