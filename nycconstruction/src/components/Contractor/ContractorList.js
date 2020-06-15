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
            finalResults:[],
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
            let outcomes = []
            const map = new Map();
            for (const item of response.data) {
                if(!map.has(item.conLicense)){
                    map.set(item.conLicense, true);    // set any value to Map
                    outcomes.push({
                        item
                    });
                }
              this.setState({finalResults: outcomes})
            }
            console.log("this is after map")
            console.log(this.state.finalResults)

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


        // var filteredArray = this.state.contractosList.filter(function(item, pos){
        //   return arr.indexOf(item)== pos; 
        // });
        

        const contract = this.state.pageOfItems.map((jobItems, index) => {
          return (
          <div key={index}>
              <ul className="Contractors">

                  <li>Contractor: </li>
                  <li id="contractorJob">{jobItems.conFirstName} {jobItems.conLastName}</li>
                 <Link to={"/contractor/info/" + jobItems._id}><button>More info</button></Link> 
              </ul>
        
          </div>
          
            
            )

        });
      return (
         <div>
             <div className="Banner">
             Contractor's List
             </div>
             {/* <div className="Pagination"> <JwPagination items={this.state.finalResults} onChangePage={this.onChangePage} pageSize={32} /></div> */}
             <div className="Pagination"> <JwPagination items={this.state.contractosList} onChangePage={this.onChangePage} pageSize={32} /></div>

              <div className="conCol">
              {contract}
          </div>
         </div>
      );

      }

    }
}

export default ContractorList;