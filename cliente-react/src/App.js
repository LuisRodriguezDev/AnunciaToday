import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App;
