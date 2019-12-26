import React, { Component } from 'react';
import './Home.css'
import FirstArrow from '../../Images/iconmonstr-arrow-24-240.png'
// import Icon from '@material-ui/core/Icon';
import About from '../About/About'
class Home extends Component {
    render() {
        return (
            <div>
{/* <div className="Banner"> */}
<div>
    <div className="nycBackground">
    <h1> NYC Contractor APP <img src={FirstArrow}></img><img src={FirstArrow}></img></h1>
    </div>
               
               </div>
            <div className="twoCol">
                <div>

                <img src="./DOB-Logo-KC.png"></img>
                </div>
                <div>
                </div>
            </div>
                {/* {this.props.isLoggedIn ? <h4>This is logged in</h4> : ''} */}
                {/* <About></About> */}
            </div>
        );
    }
}

export default Home;