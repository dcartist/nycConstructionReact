import React from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home'
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
    </div>
  );
}

export default App;
