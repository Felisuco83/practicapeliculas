import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-menupeliculas',
  templateUrl: './menupeliculas.component.html',
  styleUrls: ['./menupeliculas.component.css'],
  providers: [PeliculasService],
})
export class MenupeliculasComponent implements OnInit {
  public generos: Array<string>;
  @ViewChild('tituloPeli') cajatitulo: ElementRef;
  constructor(private _service: PeliculasService, private _router: Router) {}

  buscarPelicula() {
    this._router.navigate([
      '/buscarpelicula',
      this.cajatitulo.nativeElement.value,
    ]);
  }
  ngOnInit(): void {
    this._service.getGeneros().subscribe(
      (resp) => {
        this.generos = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
