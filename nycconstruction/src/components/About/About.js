import React, { Component } from 'react';
import './About.css'
class About extends Component {
    render() {
        return (
            <div className="theBox">             
<h4>
            This app is based of Project 2's NYC Contract Job Application.
</h4>

<p> Previous Project:<br></br> <a rel="noopener noreferrer" href="https://github.com/dcartist/nycConstructionApp" target="_blank">https://github.com/dcartist/nycConstructionApp</a>
</p>
<p>This is pulling the data from: <br></br><a  rel="noopener noreferrer" href="https://whispering-bayou-30290.herokuapp.com/api/property" target="_blank"> https://whispering-bayou-30290.herokuapp.com/api/property</a></p>
<p className="textDesign">
This dataset contains all construction job applications submitted through the Borough Offices, through eFiling, or through the HUB, which have a "Latest Action Date" since January 1, 2000.This dataset contains all job applications submitted through the Borough Offices, through eFiling, or through the HUB, which have a "Latest Action Date" since January 1, 2000.
</p>

<p>
    To Use:
</p>
<ul>
    <li>Contractors: Gives a listing of Contractor's names</li>
    <p className="textDesign">inside each name you are able to Update and Delete a record of the Contractor VIA their ID</p>
    <li>Create: Create a new Contractor </li>
    <li>Job Listing: Gives you a complete overview of the Jobs that the contractors did using the Jobs Model.</li>
</ul>
            </div>
        );
    }
}

export default About;