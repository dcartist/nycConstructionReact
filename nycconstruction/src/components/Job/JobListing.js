import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";

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
        const url = `http://localhost:8080/api/job`;
    
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
            return (<p key={index}>Job ID:  <Link to={"/jobs/info/" + jobItems.jobId}>{jobItems.jobId}</Link>  -- Contractor LastName: {jobItems.contractor.conLastName}
           
            </p>
              
              )


            
          });
        
        return (
            <div>
                Job listing
                {/* {this.state.joblistings} */}
                {jobs}
                
            </div>
        );
    }
}

export default JobListing;