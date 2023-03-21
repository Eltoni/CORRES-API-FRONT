import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from '../models/Veiculo';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesVeiculoComponent {


  veiculo: Veiculo = new Veiculo();
  
  constructor(
    private route: ActivatedRoute) {

      this.veiculo = this.route.snapshot.data['veiculo'];

      
  }


}
