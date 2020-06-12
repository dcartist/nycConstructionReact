import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './Jobs.css'
import JwPagination from 'jw-react-pagination';

class JobListing extends Component {
    constructor(props){
        super(props)
        this.state={
            joblistings: [],
            pageOfItems: []
        }
    }
    componentDidMount() {
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

      onChangePage = (pageOfItems) => {
        // update local state with new page of items
        this.setState({ pageOfItems });
    }
    render() {
        const jobs = this.state.pageOfItems.map((jobItems, index) => {
        
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
              
              )

          });
        
        return (
          <div>
               <div className="Banner">
               Job Listing
               
               </div>
               <div className="Pagination"> <JwPagination items={this.state.joblistings} onChangePage={this.onChangePage} pageSize={30} /></div>
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