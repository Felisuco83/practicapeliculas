import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculastitulo',
  templateUrl: './peliculastitulo.component.html',
  styleUrls: ['./peliculastitulo.component.css'],
})
export class PeliculastituloComponent implements OnInit {
  public peliculas: Array<Pelicula>;

  constructor(
    private _service: PeliculasService,
    private _activeroute: ActivatedRoute
  ) {}
  buscarPelisTitulo(titulo: string) {
    this._service.getPeliculasTitulo(titulo).subscribe(
      (resp) => {
        this.peliculas = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      let titulo = params.titulo;
      this.buscarPelisTitulo(titulo);
    });
  }
}
