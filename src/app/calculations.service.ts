import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  isPrimeNumber(n){
    if (n === 2) return true // 2 is a special case
    if (n % 2 === 0) return false
    for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
      if (!this.isPrimeNumber(i)) continue // <-- recursion here
      if (n % i === 0) return false
    }
    return true;
  }
}