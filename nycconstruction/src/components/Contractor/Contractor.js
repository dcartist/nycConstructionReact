import React, { Component } from 'react';
import axios from 'axios';
import Update from '../Create/Update'
import Delete from '../Create/Delete'
import './Contract.css'
class Contractor extends Component {
constructor(props){
    super(props)
    this.state ={
        conLicense: null,
      conFirstName: null,
      conLastName: null,
      _id: null,
    }
}


    componentDidMount() {
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        const jobid = this.props.match.params._id;
        const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/id/`+jobid;
        
        axios
          .get(url)
          .then(response => {
            // let newPrice = response.data.bpi[currency].rate; //Axios used here
            let newjobId = response.data
            console.log(newjobId)
            console.log(this.props.match.params)
            console.log(newjobId)
            console.log("test")
            // this.props.setPrice(newPrice);
            // this.props.setContractInfo(newjobId)
            this.setState(PreviousState => ({
                conLicense: newjobId[0].conLicense,
                conFirstName: newjobId[0].conFirstName,
                conLastName: newjobId[0].conLastName,
                _id: newjobId[0]._id,
            }))
          })
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
                        <label>Contractor Last Name: </label>
                {this.state.conLastName}
                    </p>
                    <p>
                        <label>Contractor First Name: </label>
                {this.state.conFirstName}
                    </p>
                </div>
                <div>
                <Update></Update>
                <Delete></Delete>
                </div>
            </div>
            </div>
        );
    }
}

export default Contractor;