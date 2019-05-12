import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'anuncios', pathMatch: 'full' },
  { path: 'anuncios', loadChildren: './pages/anuncios/anuncios.module#AnunciosPageModule' },
  { path: 'crear-anuncio', loadChildren: './pages/crear-anuncio/crear-anuncio.module#CrearAnuncioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
