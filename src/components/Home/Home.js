import React, { Component } from 'react';
import './Home.css'
import FirstArrow from '../../Images/iconmonstr-arrow-24-240.png'
import ConstructionPlans from '../../Images/iconmonstr-construction-35-240.png'
// import Icon from '@material-ui/core/Icon';
// import About from '../About/About'
class Home extends Component {
    render() {
        return (
            <div>
{/* <div className="Banner"> */}
<div>
    <div className="nycBackground">
    <h1> NY Contractor List <img src={FirstArrow} alt="Arrow Image"></img> <img src={FirstArrow} alt="Arrow Image"></img> <img src={ConstructionPlans} alt="Plans Image"></img></h1>
    </div>
               </div>
            </div>
        );
    }
}
export default Home;
