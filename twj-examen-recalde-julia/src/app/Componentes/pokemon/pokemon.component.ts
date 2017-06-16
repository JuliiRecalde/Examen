import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PokemonInterface}from "../../Interface/Pokemon";
import {PokemonClass} from "../../Clases/Pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() entrenador:PokemonClass;
  entrenadores: PokemonClass[] = [];
  nuevoEntrenador: PokemonClass = new PokemonClass();

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Pokemon/")
      .subscribe(
        respuesta => {
          let rjson: PokemonClass[] = respuesta.json();

          this.entrenadores = rjson;

          console.log("Usuarios: ", this.entrenadores);
        },
        error => {
          console.log("Error: ", error)

        }
      )
  }

  guardarEntrenador(){
    console.log("Entro a crear Entrenador");
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Pokemon",this.nuevoEntrenador)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
          this.entrenadores.push(respuestaJson)
        },
        error=>{
          console.log("Error",error);
        }
      )

  }

}
