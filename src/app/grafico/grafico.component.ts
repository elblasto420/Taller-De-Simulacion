import { Component, OnInit } from '@angular/core';
import { Dato } from '../models/datos';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public datos: Dato[] = JSON.parse(sessionStorage.getItem('datosBinomial'));
  public barChartLabels:number[] = this.recuperarCorridas();
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public distribucionRecuperadas: number[]= this.recuperarDistribucion();
  public barChartData:any[] =
   [ 
     
    {data: this.distribucionRecuperadas, label: 'P(X=x)'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    
    
  ];

recuperarCorridas(): number[] {
  let corriditas= new Array;
  for (let dato of this.datos)
  {
    corriditas.push(dato.corrida);
  }
  return corriditas;
}
 
recuperarDistribucion(): number[]{
  let distribuciones= new Array;
  for (let dato of this.datos)
  {
    distribuciones.push(dato.distribucion);
  }
  return distribuciones;
}

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
