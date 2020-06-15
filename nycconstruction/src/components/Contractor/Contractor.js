import React, { Component } from 'react';
import axios from 'axios';
import Update from '../Create/Update'
import Delete from '../Create/Delete'
import JobCard from "./JobCard"
import './Contract.css'
class Contractor extends Component {
constructor(props){
    super(props)
    this.state ={
        _id: this.props.match.params._id,
        conLicense: null,
      conFirstName: null,
      conLastName: null,
      results:[]
    }
}

    componentDidMount() {
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        const jobid = this.props.match.params._id;
        const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/id/`+jobid;
        axios
        .get(url)
        .then(response => {
            let newjobId = response.data
            // console.log(newjobId)
            this.setState(PreviousState => ({
                conLicense: newjobId[0].conLicense,
                conFirstName: newjobId[0].conFirstName,
                conLastName: newjobId[0].conLastName,
                _id: newjobId[0]._id,
            }))
        }).then(info=>{
            const license = `https://whispering-bayou-30290.herokuapp.com/api/property/license/`+this.state.conLicense
        console.log(license)
          axios.get(license).then(
              results=>{
                  console.log(results)
                  this.setState({results: results.data})
              }
          )
        }
            
        )
        .catch(err => {
            console.error(err);
        });
        
        
      }


    render() {
        return (
            <div>
                <div className="Banner">
               Contractor Information
               </div>
            <div className="twoCol mainDisplay">
                <div>
                    <p> <label>Contractor ID:</label>
                {this.props.match.params._id} 
                    </p>
                    <p>
                        <label>Contractor License #: </label>
                {this.state.conLicense}
                    </p>
                    <p>
                        <label>Contractor Last Name: </label>
                {this.state.conLastName}
                    </p>
                    <p>
                        <label>Contractor First Name: </label>
                {this.state.conFirstName}
                    </p>
                    <div className="contractorJobs">
                    {this.state.results.map((item,index)=>(<JobCard {...item}></JobCard>))}
                    </div>
                </div>
                <div>
                <Update idInfo={this.props.match.params._id}></Update>
                <Delete idInfo={this.props.match.params._id}></Delete>
                </div>
            </div>
            </div>
        );
    }
}

export default Contractor;