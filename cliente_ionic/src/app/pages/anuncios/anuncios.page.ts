import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {
  anuncios: Observable<any>;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.anuncios = this.anuncioService.getAnuncios();
  }

}
