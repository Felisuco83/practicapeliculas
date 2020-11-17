import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasgeneroComponent } from './components/peliculasgenero/peliculasgenero.component';
import { DetallespeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { PeliculastituloComponent } from './components/peliculastitulo/peliculastitulo.component';

const routes: Routes = [
  { path: 'genero/:gen', component: PeliculasgeneroComponent },
  { path: 'pelicula/:idPeli', component: DetallespeliculaComponent },
  { path: 'buscarpelicula/:titulo', component: PeliculastituloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
