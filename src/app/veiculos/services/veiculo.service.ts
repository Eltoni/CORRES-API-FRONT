import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Veiculo } from '../models/Veiculo';
import { Corrida } from 'src/app/corridas/models/Corrida';
import { Motorista } from 'src/app/motoristas/models/Motorista';
import { BaseService } from 'src/app/base/baseService';

@Injectable()
export class VeiculoService extends BaseService {
    constructor(private http: HttpClient) { super() }

    obterTodosVeiculo(): Observable<Veiculo[]> {
        return this.http
            .get<Veiculo[]>(this.UrlServiceV1 + 'veiculo', super.ObterHeaderJson())
            .pipe(
                catchError(super.serviceError)
            );
    }

    obterPorId(id: string): Observable<Veiculo> {
        return this.http
            .get<Veiculo>(this.UrlServiceV1 + "veiculo/" + id, super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    // obterTodos(): Observable<Corrida[]> {
    //     return this.http
    //         .get<Corrida[]>(this.UrlServiceV1 + "corridas", super.ObterHeaderJson())
    //         .pipe(
    //             catchError(this.serviceError));
    // }

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

   
}