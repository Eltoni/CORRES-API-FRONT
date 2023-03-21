import { Component, OnInit } from '@angular/core';
import { CorridaService } from '../services/corridaService';
import { Corrida } from '../models/Corrida';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  constructor(private corridaService: CorridaService) { }

  public corridas: Corrida[] | undefined ;
  errorMessage!: string;

  ngOnInit() {
    this.corridaService.obterTodos()
      .subscribe(
        corridas => this.corridas = corridas,
        error => this.errorMessage = error,
    );   
  }

}
