import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribucion-binomial',
  templateUrl: './distribucion-binomial.component.html',
  styleUrls: ['./distribucion-binomial.component.css']
})
export class DistribucionBinomialComponent implements OnInit {

corrida: number;
probabilidad: number;
varAleatoria: number;
distBinomial: number;

  constructor() { 
    this.corrida=0.0;
    this.probabilidad=0.0;
    this.varAleatoria=0.0;
    this.distBinomial=0.0;
  }

  ngOnInit() {
  }
  factorial(number):number {
   if (number <= 0) { 
      return 1; 
   } else {     
      return (number * this.factorial(number - 1)); 
   } 
} 
calculate(){

let division=(this.factorial(this.corrida)) / ((this.factorial(this.varAleatoria))*(this.factorial(this.corrida - this.varAleatoria)));
let multiplicacion=(this.probabilidad ** this.varAleatoria) * ((1 - this.probabilidad) ** (this.corrida - this.varAleatoria));
this.distBinomial=division*multiplicacion;

}

}
