import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Dash from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

 

class App extends Component {
  render () {
    return (
      <div>
      <Header />
      <Dash />
      <Wizard />
      </div>
    );
  }
}

export default App;
