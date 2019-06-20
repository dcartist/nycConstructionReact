import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './Contract.css'

class ContractorList extends Component {
    constructor(props){
        super(props)
        this.state={
            contractosList: []
        }
    }
    componentDidMount() {
        // const currency = this.props.match.params.currency;
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/job`;
        const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/`;
    
        axios
          .get(url)
          .then(response => {
            this.setState(
              prevState => ({
                contractosList: response.data
              }),
              _ => console.log("get all getting data")
            );
          }).catch(err => {
            console.error(err);
          });
      }



    render() {

        const contract = this.state.contractosList.map((jobItems, index) => {
      
            return (
            <div key={index}>
                <ul className="Contractors">
                    <li>
                    ID:  <Link to={"/contractor/info/" + jobItems._id}>{jobItems._id}</Link> 
                    </li>
                    <li>Contractor LastName: {jobItems.conLastName}</li>
                    <li>Contractor FirstName: {jobItems.conFirstName} </li>
                </ul>
          
            </div>
            
              
              )

          });
        return (
           <div>
               <div className="Banner">
               Contractor's List
               </div>
                <div className="conCol">
                {contract}
            </div>
           </div>
        );
    }
}

export default ContractorList;