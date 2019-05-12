import { Component } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.page.html',
  styleUrls: ['./crear-anuncio.page.scss'],
})
export class CrearAnuncioPage {

  constructor(private anuncioService: AnuncioService) {

  }

  anuncio = {}

  logForm() {
    this.anuncioService.crearAnuncio(this.anuncio);
  }

}
