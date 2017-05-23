import { Component, OnInit } from '@angular/core';
import { Dato } from '../models/datos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribucion-binomial',
  templateUrl: './distribucion-binomial.component.html',
  styleUrls: ['./distribucion-binomial.component.css']
})
export class DistribucionBinomialComponent implements OnInit {

  corrida: number;
  muestra: number;
  probabilidad: number;
  datos: Dato[];

  constructor(private router: Router) {
    this.corrida;
    this.probabilidad;
    this.muestra;
    this.datos = new Array;
  }

  ngOnInit() {
    // this.calculate();
    // this.datos.distribucion= new Array;
    // this.datos.variableAleatoria= new Array;
  }



  factorial(number): number {
    if (number <= 0) {
      return 1;
    } else {
      return (number * this.factorial(number - 1));
    }
  }

  generarVariableAleatoria(muestra, probabilidad): number {
    let contador = 0;
    let numeroAleatorio = 0.0;
    let respuesta = 0.0;
    while (contador <= muestra) {
      numeroAleatorio = Math.random();
      if (numeroAleatorio <= probabilidad) {
        respuesta++;
      }
      contador++;
    }

    return respuesta;
  }


  generarDatos(corrida, probabilidad) {

    let contador = 0;
    for (contador; contador <= this.corrida - 1; contador++) {
      let dato = new Dato;
      dato.variableAleatoria = this.generarVariableAleatoria(this.muestra, probabilidad);
      let division = (this.factorial(this.muestra)) / ((this.factorial(dato.variableAleatoria)) * (this.factorial(this.muestra - dato.variableAleatoria)));
      let multiplicacion = (this.probabilidad ** dato.variableAleatoria) * ((1 - this.probabilidad) ** (this.muestra - dato.variableAleatoria));
      dato.distribucion = division * multiplicacion;
      dato.corrida=contador;
      (this.datos.push(dato));


    }

  }

  

  calculate() {
    var element= <HTMLInputElement> document.getElementById("mostrarGrafico");
    element.disabled=false;
    this.datos= new Array;
    (this.generarDatos(this.muestra, this.probabilidad));
    sessionStorage.setItem('datosBinomial', JSON.stringify(this.datos));
    

  }
  mostrarGrafico(){
    this.router.navigate(['home/grafico']);
  }

}
