import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class PeliculasService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlPeliculas;
  }
  getGeneros(): Observable<any> {
    return this._http.get(this.url + 'api/generos');
  }
  getPeliculasGenero(genero: string): Observable<any> {
    return this._http.get(this.url + 'api/peliculasgenero/' + genero);
  }
  getDetallesPelicula(idPelicula: string): Observable<any> {
    return this._http.get(this.url + 'api/peliculas?idpeli=' + idPelicula);
  }
  getPeliculasTitulo(titulo: string): Observable<any> {
    return this._http.get(this.url + 'api/peliculastitulo/' + titulo);
  }
}
