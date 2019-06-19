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
            console.log(newjobId[0].contractor)
            // this.props.setPrice(newPrice);
            this.props.setjobId(newjobId)
            this.setState(PreviousState => ({
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
                jobDescr: newjobId[0].property.jobDescr,
                address: newjobId[0].property.address
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
// PULL DATA AND PLACE IT VIA SET STATE

/* 
getCountryData = e => {
  e.preventDefault();
  const apiUrl = "https://restcountries.eu/rest/v2";
  fetch(`${apiUrl}/name/${this.props.country.name}`)
    .then(res => res.json())
    .then(countryData => {
      const { capital, currencies, languages } = countryData[0];
      this.setState(prevState => ({
        capital: capital,
        currencyCode: currencies[0].code,
        language: languages[0].name
      }));
    });
};

 */




      render() {
//RENDERS THE DATA 
/* 
let countryInfo;

    if (this.state.capital) {
      const { capital, currencyCode, language } = this.state;
      countryInfo = (
        <ul>
          <li>Capital: {capital}</li>
          <li>Currency Code: {currencyCode}</li>
          <li>Language: {language}</li>
        </ul>
      );
    } else {
      countryInfo = (
        <button onClick={this.getCountryData}>{"Get Country Info"}</button>
      );
    }

     */



        return (
          <div>

            JOB Information:
            {this.props.match.params.jobId}
            {this.state.contractor.conLastName}
            {this.state.contractor.conFirstName}
            {this.state.contractor.conFirstName}
            {this.state.owner.ownFirstName}
            {this.state.owner.ownLastName}
            {this.state.owner.ownBusinessName}
            {this.state.property.borough}
            {this.state.property.propNum}
            {this.state.property.street_name}
            {this.state.property.propType}
            <p>City</p>
            {this.state.property.city}
            <p>Description</p>
            {this.state.property.jobDescr}
            <p>address:</p>
            {this.state.property.address}
            {/* {this.state.property.city} */}

            {/* <h1>Bitcoin price in {this.props.match.params.currency}</h1>
            <div className="price">{this.props.price}</div>
            <button onClick={this.goHomeViaHistory}> Go home via history</button> */}
          </div>
        );
      }
}

export default Job;