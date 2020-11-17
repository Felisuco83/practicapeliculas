import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-peliculasgenero',
  templateUrl: './peliculasgenero.component.html',
  styleUrls: ['./peliculasgenero.component.css'],
})
export class PeliculasgeneroComponent implements OnInit {
  public peliculas: Array<Pelicula>;

  constructor(
    private _service: PeliculasService,
    private _activeroute: ActivatedRoute
  ) {}

  pelisPorGenero(genero: string) {
    this._service.getPeliculasGenero(genero).subscribe(
      (response) => {
        this.peliculas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      let genero = params.gen;
      this.pelisPorGenero(genero);
    });
  }
}
