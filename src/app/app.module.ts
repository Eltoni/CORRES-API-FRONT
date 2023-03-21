import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './base/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from'./corridas/cadastro/cadastro.component';
import { ListaComponent } from './corridas/lista/lista.component';
import { CorridaService } from './corridas/services/corridaService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroMotoristaComponent } from './motoristas/cadastro/cadastro.component';
import { ListaMotoristaComponent } from './motoristas/lista/lista.component';
import { MotoristaService } from './motoristas/services/motorista.service';
import { VeiculoService } from './veiculos/services/veiculo.service';

import { ListaVeiculoComponent } from './veiculos/lista/lista.component';
import { DetalhesVeiculoComponent } from './veiculos/detalhes/detalhes.component';
import { DetalhesMotoristaComponent } from './motoristas/detalhes/detalhes.component';
import { MotoristaResolve } from './motoristas/services/motorista.resolve';
import { VeiculoResolve } from './veiculos/services/veiculos.resolve';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroComponent,
    ListaComponent,
    CadastroMotoristaComponent,
    ListaMotoristaComponent,
    ListaVeiculoComponent,
    DetalhesVeiculoComponent,
    DetalhesMotoristaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CorridaService,
    MotoristaService,
    VeiculoService,
    MotoristaResolve,
    VeiculoResolve

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
