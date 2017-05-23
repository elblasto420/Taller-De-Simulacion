import { Component, OnInit } from '@angular/core';
import { Dato } from '../models/datos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribucion-poisson',
  templateUrl: './distribucion-poisson.component.html',
  styleUrls: ['./distribucion-poisson.component.css']
})
export class DistribucionPoissonComponent implements OnInit {

  tasaMedia: number;
 
  euler: number;
  distPoisson: number;
  corrida: number;
  datos: Dato[];

  constructor(private router: Router) {
    this.tasaMedia;
   
    this.euler = 2.71828182846;
    this.distPoisson;
    this.corrida;
    this.datos = new Array;
  }

  ngOnInit() {

  }

  generarVariableAleatoria(tasaMedia): number {
    let L = Math.exp(-tasaMedia);
    let p = 1.0;
    let k = 0;
    do {
      k++;
      p *= Math.random();
    } while (p > L)
    return k - 1;
  }

  calculate() {

    var element= <HTMLInputElement> document.getElementById("mostrarGrafico");
    element.disabled=false;
    this.datos= new Array;
    this.generarDatos(this.corrida, this.tasaMedia);
    sessionStorage.setItem('datosPoisson', JSON.stringify(this.datos));

  }

 mostrarGrafico(){
    this.router.navigate(['home/graficop']);
  }

  factorial(number): number {
    if (number <= 0) {
      return 1;
    } else {
      return (number * this.factorial(number - 1));
    }
  }

  generarDatos(corrida, tasaMedia) {
    let contador = 0;
    for (contador; contador <= corrida - 1; contador++) {
      let dato = new Dato;
      dato.variableAleatoria = this.generarVariableAleatoria(tasaMedia);
      let divisor=((this.euler ** -(tasaMedia)) * (tasaMedia ** dato.variableAleatoria));
      let dividendo= this.factorial(dato.variableAleatoria);
      dato.distribucion = divisor/dividendo;
      dato.corrida= contador;
      this.datos.push(dato);
    }
  }
}

