import { Component, OnInit } from '@angular/core';
import { Credito } from '../models/credito';
import { CreditoService } from '../../services/credito.service';

@Component({
  selector: 'app-credito-consulta',
  templateUrl: './credito-consulta.component.html',
  styleUrls: ['./credito-consulta.component.css']
})
export class CreditoConsultaComponent implements OnInit {

  creditos:Credito[];
  searchText: string;
  constructor(private creditoService: CreditoService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.creditos = this.creditoService.get();
}

}
