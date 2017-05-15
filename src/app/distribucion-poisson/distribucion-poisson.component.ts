import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribucion-poisson',
  templateUrl: './distribucion-poisson.component.html',
  styleUrls: ['./distribucion-poisson.component.css']
})
export class DistribucionPoissonComponent implements OnInit {

tasaMedia: number;
variableAleatoria: number;
euler: number;
distPoisson: number;
  constructor() { 
    this.tasaMedia=0.0;
    this.variableAleatoria=0.0;
    this.euler= 2.71828182846;
    this.distPoisson=0.0;
  }

  ngOnInit() {

  }
calculate(){

this.distPoisson= ((this.euler ** -(this.tasaMedia))*(this.tasaMedia ** this.variableAleatoria))/this.factorial(this.variableAleatoria);


}
factorial(number):number {
   if (number <= 0) { 
      return 1; 
   } else {     
      return (number * this.factorial(number - 1)); 
   } 
} 
      // outputs 720 
}

