import { Component, OnInit } from '@angular/core';
import { Motorista } from '../models/Motorista';
import { MotoristaService } from '../services/motorista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaMotoristaComponent  implements OnInit {


  constructor(private motoristaService: MotoristaService) { }

  public motoristas: Motorista[] | undefined ;
  errorMessage!: string;

  ngOnInit() {
    this.motoristaService.obterTodosMotoristas()
      .subscribe(
        motoristas => this.motoristas = motoristas,
        error => this.errorMessage = error,
    );   
  }
}
