import React from 'react';
import Home from './components/Home/Home'
import Jobs from './components/Job/JobListing'
import About from './components/About/About'
import Navigation from './Navigation'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>

      <Route path="/" exact component={Home}/>
      <Route path="/jobs" exact component={Jobs}/>
      <Route path="/about" exact component={About}/>
    </div>
  );
}

export default App;
