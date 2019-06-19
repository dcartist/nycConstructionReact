import React, { Component } from 'react';
import axios from 'axios';

class Job extends Component {
constructor(props){
  super(props)
  this.state = {
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
        // const url = `http://localhost:8080/api/job`;
        const jobid = this.props.match.params.jobId;
        const url = `http://localhost:8080/api/job/id/`+jobid;
        


    
    
        axios
          .get(url)
          .then(response => {
            // let newPrice = response.data.bpi[currency].rate; //Axios used here
            let newjobId = response.data
            console.log(newjobId)
            console.log(this.props.match.params)
            // this.props.setPrice(newPrice);
            this.props.setjobId(newjobId)
            this.setState({
              contractor: {
                conLicense: this.newjobId.contractor.conLicense,
                conFirstName: this.newjobId.contractor.conFirstName,
                conLastName: this.newjobId.contractor.conLastName,
              },
            })
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
          <div>

            JOB Information:
            {this.props.match.params.jobId}
            {this.state.contractor.conLastName}
            {/* {this.newjobId.contractor.conLastName} */}
            {/* {this.props.match.params.contractor.conLastName} */}
            {/* {this.props.match.params.contractor.conFirstName} */}

            {/* <h1>Bitcoin price in {this.props.match.params.currency}</h1>
            <div className="price">{this.props.price}</div>
            <button onClick={this.goHomeViaHistory}> Go home via history</button> */}
          </div>
        );
      }
}

export default Job;