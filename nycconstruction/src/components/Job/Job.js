import React, { Component } from 'react';
import axios from 'axios';
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
      this.props.history.push("/")
      // not a hard direct
    }

      render() {
     
        return (
          <div >
 <div className="Banner">
               Job information
               </div>
          <div className="mod">
            <p>

          <label>
            Job ID: 
          </label>
            {this.props.match.params.jobId}
            </p>
          <p><label>Contractor Last Name: </label>
            {this.state.contractor.conLastName}</p>
          <p>
          <label>Contractor First Name: </label>
          {this.state.contractor.conFirstName}
          </p>
          <p>
          <label>Property Owner: </label>
          {this.state.owner.ownFirstName} {this.state.owner.ownLastName}
          </p>
          <p>

          <label>Owner Business Name: </label>
            {this.state.owner.ownBusinessName}
          </p>
          <p>
          <label>Borough: </label>
            {this.state.property.borough}
          </p>
          <p>
          <label>Address: </label>
            {this.state.property.address}
          </p>
          <p>
          <label>City: </label>
            {this.state.property.city}
          </p>
          <p>
          <label>Property Type: </label>
            {this.state.property.propType}
          </p>
          <p>
          <label>Job Description: </label><br></br>
            <span className="justText">
            {this.state.property.jobDescr}
            </span>
          </p>
       
          
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