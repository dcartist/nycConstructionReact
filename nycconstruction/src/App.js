import React, { Component } from 'react';
//Login information Begins
import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogInForm'
import LogOut from './components/LogOut/LogOut'
import axios from 'axios'
//Login information Ends
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
      _id: null,
      email: '',
      password: '',
      isLoggedIn: false
    };
  }

  setjobId = (jobId) => {
    this.setState({jobId: jobId});
  }
  setContractInfo = (_id) => {
    this.setState({_id: _id});
  }
 //Beginning of Login Info

 componentDidMount() {
  if (localStorage.token) {
    this.setState({
      isLoggedIn: true,
    })
  } else {
    this.setState({
      isLoggedIn: false
    })
  }
}

handleLogOut() {
  this.setState({
    email: '',
    password: '',
    isLoggedIn: false
  })
  localStorage.clear()
}

handleInput(e) {
  this.setState({
      [e.target.name]: e.target.value
  })
}

handleSignUp(e) {
  e.preventDefault()
  axios.post('https://whispering-bayou-30290.herokuapp.com/api/users/signup', {
    email: this.state.email,
    password: this.state.password
  })
  .then(response => {
    localStorage.token = response.data.token
    this.setState({ isLoggedIn: true })
  })
  .catch(err => console.log(err))
}


handleLogIn(e) {
  e.preventDefault()
  axios.post('https://whispering-bayou-30290.herokuapp.com/api/users/login', {
    email: this.state.email,
    password: this.state.password
  })
  .then(response => {
    localStorage.token = response.data.token
    this.setState({isLoggedIn: true})
  })
  .catch(err => console.log(err))
}

 //End of login info






  render() {
    return (
      <div>
        <header className="App-header">
        <Navigation></Navigation>
      </header>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/create"  component={Create}/>
      <Route path="/signup"  component={SignUpForm} />
      <Route path="/login"  component={LogInForm}/>
      <Route path="/update"  component={Update}/>
      <Route path="/delete"  component={Delete}/>
      <Route path="/jobs" exact component={Jobs}/>
      <Route path="/jobs/info" exact component={Jobinfo}/>
      <Route path="/jobs/info/:jobId" render={(props)=> <Jobinfo setjobId={this.setjobId} {...props} {...this.state} />} />
      <Route path="/contractor" exact component={Contractors}/>
      <Route path="/contractor/info" exact component={Jobinfo}/>
      <Route path="/contractor/info/:_id" render={(props)=> <ContractorInfo setContractInfo={this._id} {...props} {...this.state} />} />
      <Route path="/about" render={(props) => {
                return(
                  <About isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp}/>
                )
              }}/>
      </Switch>
      </div>
    );
  }
}
export default App;