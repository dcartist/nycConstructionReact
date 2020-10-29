import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './Jobs.css'
import JobCard from "./JobCard"

import Loader from '../Loader/Loader'
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
        const url = `https://whispering-bayou-30290.herokuapp.com/api/property`;
    
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
      if (this.state.joblistings.length == 0){
        return <Loader></Loader>
              } else {
                console.log(this.state.joblistings)
                return(<div>
                 
                  <div className="Pagination"> <JwPagination items={this.state.joblistings} onChangePage={this.onChangePage} pageSize={32} /></div>
                  <div className="JobBase">
                  {this.state.pageOfItems.map((item, index) => (<JobCard {...item}></JobCard>))}
                  </div>

                </div>)


              //   const jobs = this.state.pageOfItems.map((jobItems, index) => {
              //     return (
              //       <tr key={index}>
              //         <td className="tablePadding">
              //         <b>{jobItems._id}</b>
              //         </td>
              //         <td>
              //         {jobItems.property.address}
              //         </td>
              //         <td>
              //           {jobItems.property.city}
              //         </td>
              //         <td>
              //         {jobItems.property.borough}
              //         </td>
              //         <td>
      
              //         </td>
              //         <td>
              //         <Link to={"/jobs/info/" + jobItems.jobId}><button> Job # {jobItems.jobId} information </button>
              //         </Link>
              //         </td>
              //       </tr>
                    
              //       )
      
              //   });
              
              // return (
              //   <div>
              //        <div className="Banner">
              //        Job Listing
                     
              //        </div>
              //        <div className="Pagination"> <JwPagination items={this.state.joblistings} onChangePage={this.onChangePage} pageSize={30} /></div>
              //        <div className="centeredTable">
                     
              //        <table>
              //          <thead className="tableHeader">
              //          <td>Job ID #</td>
              //            <td>Address</td>
              //            <td>City</td>
              //            <td>Borough</td>
              //          </thead>
              //          {jobs}
              //        </table>
              //        </div>
                     
              //    </div>
              // );
              }

    }
}

export default JobListing;