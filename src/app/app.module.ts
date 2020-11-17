import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenupeliculasComponent } from './components/menupeliculas/menupeliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasgeneroComponent } from './components/peliculasgenero/peliculasgenero.component';
import { PeliculasService } from './services/peliculas.service';
import { DetallespeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { PeliculastituloComponent } from './components/peliculastitulo/peliculastitulo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenupeliculasComponent,
    PeliculasgeneroComponent,
    DetallespeliculaComponent,
    PeliculastituloComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
