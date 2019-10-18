import { Component } from '@angular/core';
import { CalculationService } from './calculations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private calculationservice: CalculationService){}

  runWorker() {
    const worker = new Worker('./prime-calculations.worker', { 
        type: 'module' 
    });       
    worker.onmessage = ({ data }) => {
        console.log('From Web Worker:', data);
    };       
    worker.postMessage({});
 }    
 runThread() {
    console.time('main');
    let arePrimeList = [];
     for(let i =0;i<2000000;i++){
       arePrimeList.push(this.calculationservice.isPrimeNumber(i));
     }       
     console.log('From Javascript Thread', arePrimeList);
     console.timeEnd('main');
 }
}
