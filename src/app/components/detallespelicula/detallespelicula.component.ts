import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-detallespelicula',
  templateUrl: './detallespelicula.component.html',
  styleUrls: ['./detallespelicula.component.css'],
})
export class DetallespeliculaComponent implements OnInit {
  public pelicula: Pelicula;
  constructor(
    private _service: PeliculasService,
    private _activeroute: ActivatedRoute
  ) {}

  buscarPelisId(idPeli: string) {
    this._service.getDetallesPelicula(idPeli).subscribe(
      (resp) => {
        this.pelicula = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      let idPeli = params.idPeli;
      this.buscarPelisId(idPeli);
    });
  }
}
