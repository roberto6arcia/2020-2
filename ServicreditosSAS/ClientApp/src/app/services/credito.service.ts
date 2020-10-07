import { Injectable } from '@angular/core';
import { Credito } from './../creditofinanciero/models/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor() { }

  get(): Credito[] {
    return JSON.parse(localStorage.getItem('datos')); 
    }

    post(credito: Credito) {
      let creditos: Credito[] = [];    
      if (this.get() != null) {   
      creditos = this.get();    
      }      
      creditos.push(credito);     
      localStorage.setItem('datos', JSON.stringify(creditos));      
      }
}
