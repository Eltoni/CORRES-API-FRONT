import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Motorista } from '../models/Motorista';
import { MotoristaService } from '../services/motorista.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesMotoristaComponent {
  
  motorista: Motorista = new Motorista();
  
  constructor(
    private route: ActivatedRoute) {

      this.motorista = this.route.snapshot.data['motorista'];
  }


}
