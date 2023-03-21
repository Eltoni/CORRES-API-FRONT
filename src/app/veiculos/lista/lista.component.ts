import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/Veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaVeiculoComponent implements OnInit{

  public veiculos: Veiculo[] | undefined ;
  errorMessage!: string;

  constructor(private veiculoService : VeiculoService){}
 
  ngOnInit() {

    this.veiculoService.obterTodosVeiculo()
      .subscribe(
        veiculos => this.veiculos = veiculos,
        error => this.errorMessage = error
      )
  }

  // ngOnInit() {
  //   this.motoristaService.obterTodosMotoristas()
  //     .subscribe(
  //       motoristas => this.motoristas = motoristas,
  //       error => this.errorMessage = error,
  //   );   
  // }


}
