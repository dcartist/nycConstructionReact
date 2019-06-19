import React, { Component } from 'react';
import Home from './components/Home/Home'
import Jobs from './components/Job/JobListing'
import Jobinfo from './components/Job/Job'
import About from './components/About/About'
import Create from './components/Create/Create'
import Delete from './components/Create/Delete'
import Navigation from './Navigation'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: null
    };
  }

  setjobId = (jobId) => {
    this.setState({jobId: jobId});
  }
 
  render() {
    return (
      <div>
        <header className="App-header">
        <Navigation></Navigation>
      </header>
      <Route path="/" exact component={Home}/>
      <Route path="/create"  component={Create}/>
      <Route path="/delete"  component={Delete}/>
      <Route path="/jobs" exact component={Jobs}/>
      <Route path="/jobs/info" exact component={Jobinfo}/>
      <Route path="/jobs/info/:jobId" render={(props)=> <Jobinfo setjobId={this.setjobId} {...props} {...this.state} />} />

      <Route path="/about" exact component={About}/>
      </div>
    );
  }
}

export default App;