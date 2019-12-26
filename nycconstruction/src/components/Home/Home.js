import React, { Component } from 'react';
import './Home.css'
import About from '../About/About'
class Home extends Component {
    render() {
        return (
            <div>
{/* <div className="Banner"> */}
<div>
    <div className="nycBackground">
        .
    </div>
               About NYC Contractor APP
               </div>
            <div className="twoCol">
                <div>

                <img src="./DOB-Logo-KC.png"></img>
                </div>
                <div>
                {this.props.isLoggedIn ? <h4>This is logged in</h4> : ''}
                {/* <About></About> */}
                </div>
            </div>
            </div>
        );
    }
}

export default Home;