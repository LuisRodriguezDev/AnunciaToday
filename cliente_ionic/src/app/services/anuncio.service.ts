import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  url = 'http://localhost:8000/api/anuncios';

  constructor(private http: HttpClient) {

  }

  getAnuncios() {
    return this.http.get(`${this.url}`)
  }

  crearAnuncio(anuncio) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(this.url, anuncio, httpOptions)
      .subscribe(data => {
        console.log(data)
      })
  }
}
