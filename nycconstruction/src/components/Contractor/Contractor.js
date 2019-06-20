import React, { Component } from 'react';
import axios from 'axios';

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
        // const url = `http://localhost:8080/api/job`;
        const jobid = this.props.match.params._id;
        const url = `http://localhost:8080/api/contractor/id/`+jobid;
        


    
    
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
                information:
            {this.props.match.params._id}
            {/* {this.props.match.params.conLastName} */}
            {this.state.conLastName}
            {this.state.conFirstName}
            {/* {this.state.conFirstName} */}
            </div>
        );
    }
}

export default Contractor;