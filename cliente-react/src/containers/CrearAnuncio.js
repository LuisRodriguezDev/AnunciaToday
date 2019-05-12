import React, { Component } from "react";

class CrearAnuncio extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      titulo: '',
      descripcion: ''
    }

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    fetch('http://localhost:8000/api/anuncios', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res=>res.json())
      .then(res => {
        this.setState(this.initialState);
        this.props.history.push(`/`);
      });
  }

  render() {
    const { titulo, descripcion } = this.state;

    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered is-size-2 has-text-info">
              Crear Nuevo Anuncio
            </h1>
            <div className="field">
              <label className="label">Titulo del Anuncio</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="titulo"
                  value={titulo}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Descripción del Anuncio</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="descripcion"
                  value={descripcion}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <input
                  type="button"
                  value="Crear"
                  className="button is-info"
                  onClick={this.submitForm}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CrearAnuncio;
