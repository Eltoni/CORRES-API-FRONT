import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Corrida } from '../models/Corrida';
import { Veiculo } from 'src/app/veiculos/models/Veiculo';
import { Motorista } from 'src/app/motoristas/models/Motorista';
import { CorridaService } from '../services/corridaService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  corridaForm!: FormGroup;
  corrida!: Corrida;
  errors: any[] = [];
  veiculos!: Veiculo[];
  motoristas!: Motorista[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private corridaService: CorridaService,
    private toastr: ToastrService
   ) { 

      this.corridaService.obterVeiculo()
      .subscribe(
        veiculos => this.veiculos = veiculos,
        fail => this.errors = fail.error.errors
      );
      
      this.corridaService.obterMotorista()
      .subscribe(
        motoristas => this.motoristas = motoristas,
        fail => this.errors = fail.error.errors
      );


      
    }

  ngOnInit() {

    this.corridaForm = this.fb.group({
      veiculoId:[''],
      idMotoristaPrimeiro:'',
      idMotoristaSegundo: '',
      descricao: '',
      dataHoraSaida: '',
      dataHoraChegada: '',
      tipoViagem: '',
      nomePlaca: '',
      nomeModelo: ''

    });

  }
  

  cadastrarCorrida() {
    if (this.corridaForm.valid && this.corridaForm.dirty) {

      this.corrida = Object.assign({}, this.corrida, this.corridaForm.value);

      this.corridaService.adicionarCorrida(this.corrida)
            .subscribe(
              sucesso => { this.processarSucesso(sucesso) },
              falha => { this.processarFalha(falha) }
            );

    }
  }

  processarSucesso(response: any) {
    this.corridaForm.reset();
    this.errors = [];
    this.router.navigate(['/']);
    let toast = this.toastr.success('Corrida cadastrada com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
  processarFalha(fail: any) {

    this.errors = fail.error.errors;

    this.toastr.error('Opa!Ocorreu algum Erro!!');
  }

//   onSaveComplete(response: any) {
//     this.router.navigate(['/']);
//   }
// //aqui
//   onError(fail: any) {
//     this.errors = fail.error.errors;
//   }

}
