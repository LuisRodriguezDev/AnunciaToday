import React, { Component } from 'react';

class Anuncios extends Component {
  state = {
    anuncios: []
  }

  componentDidMount() {
    const url = "http://localhost:8000/api/anuncios";

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        this.setState({
          anuncios: respuesta
        })
      })
  }

  render() {
    const { anuncios } = this.state;

    const resultado = anuncios.map((anuncio) => {
      return (
        <div className="column is-one-third">
          <div className="card" key={anuncio.id}>
            <header className="card-header">
              <p className="card-header-title">
                {anuncio.titulo}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {anuncio.descripcion}
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="columns is-multiline">
        {resultado}
      </div>
    )
  }
}

export default Anuncios;
