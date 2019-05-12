import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    datos: []
  }

  componentDidMount() {
    const url = "http://localhost:8000/api/anuncios";

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        this.setState({
          datos: respuesta
        })
      })
  }

  render() {
    const { datos } = this.state;

    const resultado = datos.map((anuncio) => {
      return (
        <div key={anuncio.id}>
          <h1>{anuncio.titulo}</h1>
          <p>{anuncio.descripcion}</p>
        </div>
      )
    })

    return <div>{resultado}</div>
  }
}

export default App;
