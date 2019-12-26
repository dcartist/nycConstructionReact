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
              // _ => console.log("get all getting data")
              _ => console.log(this.state.joblistings)
            );
          }).catch(err => {
            console.error(err);
          });
      }


    render() {
        const jobs = this.state.joblistings.map((jobItems, index) => {
        
            return (
              <tr key={index}>
                <td className="tablePadding">
                <b>{jobItems._id}</b>
                </td>
                <td>
                {jobItems.property.address}
                </td>
                <td>
                  {jobItems.property.city}
                </td>
                <td>
                {jobItems.property.borough}
                </td>
                <td>

                </td>
                <td>
                <Link to={"/jobs/info/" + jobItems.jobId}><button> Job # {jobItems.jobId} information </button>
                </Link>
                </td>
              </tr>




            // <div key={index} >
            //   <ul className="Contractors">
            //     <li className="bolding"> Job id#: {jobItems._id}</li>
            //     <li> City: {jobItems.property.city}</li>
            //     <li> Borough: {jobItems.property.borough}</li>
            //     {/* <li>Contractor Last Name: {jobItems.contractor.conLastName}</li> */}
            //     {/* <li>Contractor First Name: {jobItems.contractor.conFirstName}</li>
            //     <li>Contractor License: {jobItems.contractor.conLicense}</li> */}
            //     <li><Link to={"/jobs/info/" + jobItems.jobId}>
            //     <button> Job # {jobItems.jobId} information </button>
            //     </Link></li>
            //   </ul>
            // </div>
              
              )


            
          });
        
        return (
          <div>
               <div className="Banner">
               Job Listing
               </div>
               <div className="centeredTable">
               <table>
                 <thead className="tableHeader">
                 <td>Job ID #</td>
                   <td>Address</td>
                   <td>City</td>
                   <td>Borough</td>
                 </thead>
                 {jobs}
               </table>
               </div>
               

                {/* <div className="conCol">
                   {jobs}
            </div> */}
           </div>
        );
    }
}

export default JobListing;