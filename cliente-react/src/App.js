import React, { Component } from 'react';
import Navbar from './Navbar';
import Anuncios from './Anuncios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered is-size-1 logo">AnunciaToday</h1>
            <Anuncios />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
