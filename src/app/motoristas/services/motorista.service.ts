import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Veiculo } from 'src/app/veiculos/models/Veiculo';
import { Motorista } from '../models/Motorista';
import { Corrida } from 'src/app/corridas/models/Corrida';
import { BaseService } from 'src/app/base/baseService';

@Injectable()
export class MotoristaService extends BaseService {
   
    constructor(private http: HttpClient) { super() }

    obterTodosMotoristas(): Observable<Motorista[]> {
        return this.http
            .get<Motorista[]>(this.UrlServiceV1 + "motorista", super.ObterHeaderJson())
            .pipe(
                catchError(this.serviceError));
    }

    obterPorId(id: string): Observable<Motorista> {
        return this.http
            .get<Motorista>(this.UrlServiceV1 + "motorista/" + id, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    // adicionarCorrida(corrida: Corrida) : Observable<Corrida> {
    //     let response = this.http
    //         .post(this.UrlServiceV1 + 'corridas', corrida, super.ObterHeaderJson())
    //         .pipe(
    //             map(super.extractData),
    //             catchError(super.serviceError));
            
    //     return response;
    // }

    // obterMotorista(): Observable<Motorista[]> {
    //     return this.http
    //         .get<Motorista[]>(this.UrlServiceV1 + 'motorista')
    //         .pipe(
    //             catchError(super.serviceError)
    //         );
    // }

    // obterVeiculo(): Observable<Veiculo[]> {
    //     return this.http
    //         .get<Veiculo[]>(this.UrlServiceV1 + 'veiculo')
    //         .pipe(
    //             catchError(super.serviceError)
    //         );
    // }

   
}