import React, { Component } from 'react';
import Anuncios from './Anuncios';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered is-size-1 logo">
              AnunciaToday
            </h1>
            <Anuncios />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
