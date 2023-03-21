import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './corridas/cadastro/cadastro.component';
import { ListaComponent } from './corridas/lista/lista.component';
import { ListaMotoristaComponent } from './motoristas/lista/lista.component';

import { ListaVeiculoComponent } from './veiculos/lista/lista.component';
import { DetalhesMotoristaComponent } from './motoristas/detalhes/detalhes.component';
import { MotoristaResolve } from './motoristas/services/motorista.resolve';
import { VeiculoResolve } from './veiculos/services/veiculos.resolve';
import { DetalhesVeiculoComponent } from './veiculos/detalhes/detalhes.component';



const routes: Routes = [
  {path: '', component: ListaComponent },
  {path: 'cadastro-corridas', component: CadastroComponent },
  {path: 'lista-motoristas', component: ListaMotoristaComponent },
  {path: 'lista-veiculos', component: ListaVeiculoComponent },
  {
    path: 'detalhes-motoristas/:id', 
    component: DetalhesMotoristaComponent,
    resolve: {
      motorista: MotoristaResolve
    }
  },

  {
    path: 'detalhes-veiculos/:id', 
    component: DetalhesVeiculoComponent,
    resolve: {
      veiculo: VeiculoResolve
    }
  }
  
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
