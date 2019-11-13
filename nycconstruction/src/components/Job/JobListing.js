import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './Jobs.css'

class JobListing extends Component {
    constructor(props){
        super(props)
        this.state={
            joblistings: []
        }
    }
    componentDidMount() {
        // const currency = this.props.match.params.currency;
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
    
        axios
          .get(url)
          .then(response => {
            this.setState(
              prevState => ({
                joblistings: response.data
              }),
              _ => console.log("get all getting data")
            );
          }).catch(err => {
            console.error(err);
          });
      }


    render() {
        const jobs = this.state.joblistings.map((jobItems, index) => {
            // return <Country country={country} key={index} />;
            // return <p key={index}>Job ID: {jobItems.jobId} Contractor LastName: {jobItems.contractor.conLastName}</p>
            return (
            <div key={index} >
              <ul className="Contractors">
                <li className="bolding"> Job id#: {jobItems._id}</li>
                {/* <li>Contractor Last Name: {jobItems.contractor.conLastName}</li> */}
                {/* <li>Contractor First Name: {jobItems.contractor.conFirstName}</li>
                <li>Contractor License: {jobItems.contractor.conLicense}</li> */}
                <li><Link to={"/jobs/info/" + jobItems.jobId}>
                <button> Job # {jobItems.jobId} information </button>
                </Link></li>
              </ul>
            </div>
              
              )


            
          });
        
        return (
          <div>
               <div className="Banner">
               Job Listing
               </div>
                <div className="conCol">
                {jobs}
            </div>
           </div>
        );
    }
}

export default JobListing;