import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.page.html',
  styleUrls: ['./crear-anuncio.page.scss'],
})
export class CrearAnuncioPage {

  constructor(private anuncioService: AnuncioService, private router: Router) {

  }

  anuncio = {}

  logForm() {
    this.anuncioService.crearAnuncio(this.anuncio);
    this.router.navigateByUrl('/');
  }

}
