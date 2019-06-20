import React, { Component } from 'react';
import './Home.css'
import About from '../About/About'
class Home extends Component {
    render() {
        return (
            <div>
<div className="Banner">
               About NYC Contractor APP
               </div>
            <div className="twoCol">
                <div>

                <img src="./DOB-Logo-KC.png"></img>
                </div>
                <div>
                <About></About>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;