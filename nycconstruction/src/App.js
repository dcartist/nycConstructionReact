import React, { Component } from 'react';
import Home from './components/Home/Home'
import Jobs from './components/Job/JobListing'
import Jobinfo from './components/Job/Job'
import Contractors from './components/Contractor/ContractorList'
import ContractorInfo from './components/Contractor/Contractor'
import About from './components/About/About'
import Create from './components/Create/Create'
import Delete from './components/Create/Delete'
import Update from './components/Create/Update'
import Navigation from './Navigation'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: null,
      _id: null
    };
  }

  setjobId = (jobId) => {
    this.setState({jobId: jobId});
  }
  setContractInfo = (_id) => {
    this.setState({_id: _id});
  }
 
  render() {
    return (
      <div>
        <header className="App-header">
        <Navigation></Navigation>
      </header>
      <Route path="/" exact component={Home}/>
      <Route path="/create"  component={Create}/>
      <Route path="/update"  component={Update}/>
      <Route path="/delete"  component={Delete}/>
      <Route path="/jobs" exact component={Jobs}/>
      <Route path="/jobs/info" exact component={Jobinfo}/>
      <Route path="/jobs/info/:jobId" render={(props)=> <Jobinfo setjobId={this.setjobId} {...props} {...this.state} />} />
      <Route path="/contractor" exact component={Contractors}/>
      <Route path="/contractor/info" exact component={Jobinfo}/>
      <Route path="/contractor/info/:_id" render={(props)=> <ContractorInfo setContractInfo={this._id} {...props} {...this.state} />} />

      <Route path="/about" exact component={About}/>
      </div>
    );
  }
}
export default App;