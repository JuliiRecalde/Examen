import {Component, Input, OnInit} from '@angular/core';

import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {DrinkInterface} from "../../Interface/Drink";

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  drinks: DrinkInterface[] = [];
  @Input() drink:DrinkInterface;



  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }
  ngOnInit() {

  }

  cargarBebidas() {
    this._http
      .get("https://api.punkapi.com/v2/beers")
      // .map(response=>response.json())
      .subscribe(
        (response) => {
          console.log("Response:", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.drink = respuesta;

          /* this.drinks = this.drinks.map(
           (drink) => {
           drink.imagenURL = "/assets/Imagenes" + drink.name + '.jpg';
           return drink;
           }
           )*/

        },
        (error) => {
          console.log("Response:", error);
        },
        () => {
          console.log("finally");
        }
      )
  }

}
