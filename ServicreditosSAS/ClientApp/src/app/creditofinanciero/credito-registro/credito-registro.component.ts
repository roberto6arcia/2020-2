import { Component, OnInit } from '@angular/core';
import { Credito } from '../models/credito';
import { CreditoService } from '../../services/credito.service';

@Component({
  selector: 'app-credito-registro',
  templateUrl: './credito-registro.component.html',
  styleUrls: ['./credito-registro.component.css']
})
export class CreditoRegistroComponent implements OnInit {

  credito: Credito;
  constructor(private creditoService: CreditoService) { }

  ngOnInit() {
    this.credito= new Credito();
  }

  add() {
    alert('Credito creado!' + JSON.stringify(this.credito));
    this.creditoService.post(this.credito)
    };

  }
