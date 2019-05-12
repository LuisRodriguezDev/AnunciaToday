import React, { Component } from 'react';
import Anuncios from './Anuncios';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">AnunciaToday</h1>
          <Anuncios />
        </div>
      </section>
    )
  }
}

export default App;
