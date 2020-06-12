import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
import './Contract.css'
import Loader from '../Loader/Loader'
import JwPagination from 'jw-react-pagination';

class ContractorList extends Component {
    constructor(props){
        super(props)
        this.state={
            contractosList: [],
            pageOfItems: []
        }
    }
    componentDidMount() {
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


      onChangePage = (pageOfItems) => {
        // update local state with new page of items
        this.setState({ pageOfItems });
    }

    render() {
      if (this.state.contractosList.length == 0){
return <Loader></Loader>
      }else {

        const contract = this.state.pageOfItems.map((jobItems, index) => {
      
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
             <div className="Pagination"> <JwPagination items={this.state.contractosList} onChangePage={this.onChangePage} pageSize={30} /></div>

              <div className="conCol">
              {contract}
          </div>
         </div>
      );

      }

    }
}

export default ContractorList;