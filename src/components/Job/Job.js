import React, { Component } from 'react';
import axios from 'axios';
import Map from '../Map/Map'
import {Link} from 'react-router-dom'
import './Job.css'
class Job extends Component {
constructor(props){
  super(props)
  this.state = {
    _id: null,
    jobInformation: null,
    contractor: {
      conLicense: null,
      conFirstName: null,
      conLastName: null,
    },
    owner: {
      ownFirstName: null,
      ownLastName: null,
      ownBusinessName: null,
    },
    property: {
      borough: null,
      propNum: null,
      street_name: null,
      propType: null,
      city: null,
      jobDescr: null,
      address: null
    }
  }
}

    componentDidMount() {
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        const jobid = this.props.match.params.jobId;
        const url = `https://whispering-bayou-30290.herokuapp.com/api/job/id/`+jobid;
        
        axios
          .get(url)
          .then(response => {
            // let newPrice = response.data.bpi[currency].rate; //Axios used here
            let newjobId = response.data
            let jobDescription = null
            if (newjobId[0].property.jobDescr.length === 0){
              jobDescription = "No Job Description is available"
            }
            else {
              jobDescription = newjobId[0].property.jobDescr
            }
            console.log(newjobId)
            console.log(this.props.match.params)
            console.log(newjobId[0].contractor)
            // this.props.setPrice(newPrice);
            this.props.setjobId(newjobId)
            console.log(newjobId[0].property.jobDescr.length)
            console.log(newjobId[0])
            this.setState(PreviousState => ({
              jobInformation: newjobId[0],
              contractor: {
                conLicense: newjobId[0].contractor.conLicense,
                conFirstName: newjobId[0].contractor.conFirstName,
                conLastName: newjobId[0].contractor.conLastName,
              },
              owner: {
                ownFirstName: newjobId[0].owner.ownFirstName,
                ownLastName: newjobId[0].owner.ownLastName,
                ownBusinessName: newjobId[0].owner.ownBusinessName,
              },
              property: {
                borough: newjobId[0].property.borough,
                propNum: newjobId[0].property.propNum,
                street_name: newjobId[0].property.street_name,
                propType: newjobId[0].property.propType,
                city: newjobId[0].property.city,
                address: newjobId[0].property.address,
                jobDescr: jobDescription
              },
            }))
          })
          .catch(err => {
            console.error(err);
          });
      }
    goHomeViaHistory = () => {
      this.props.history.push("/jobs")
      // not a hard direct
    }

      render() {
     
        return (
          <div >
 <div className="Banner">
               Job information
               <Link onClick={this.goHomeViaHistory}><button> Return to listing</button></Link>
               </div>
               <div className="jobBody">
               <div className="mod">
         
<ul>
  <li><span>Job ID:</span> {this.props.match.params.jobId}</li>
  <li><span>Contractor Last Name:</span> {this.state.contractor.conLastName}</li>
  <li><span>Contractor First Name:</span> {this.state.contractor.conFirstName}</li>
  <li><span>Property Owner:</span> {this.state.owner.ownFirstName} {this.state.owner.ownLastName}</li>
  <li><span>Owner Business Name:</span> {this.state.owner.ownBusinessName}</li>
  <li><span>Borough:</span> {this.state.property.borough}</li>
  <li><span>Address:</span>  {this.state.property.address}</li>
  <li><span>City:</span> {this.state.property.city}</li>
  <li><span>Property Type:</span> {this.state.property.propType}</li>
  <li><span>Job Description:</span> {this.state.property.jobDescr}</li>
  {/* <li><span></span></li> */}
 
</ul>
          
          
          </div>
<div>
  <Map newLocation ={this.state.property.address}></Map>

</div>
               </div>
          
            
  
            {/* {this.state.property.city} */}

            {/* <h1>Bitcoin price in {this.props.match.params.currency}</h1>
            <div className="price">{this.props.price}</div>
            <button onClick={this.goHomeViaHistory}> Go home via history</button> */}
          </div>
        );
      }
}

export default Job;