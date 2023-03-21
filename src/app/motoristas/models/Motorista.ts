import { Corrida } from "src/app/corridas/models/Corrida";

export class Motorista {
    id!: string;
    nome!: string;
    documento! :string;
    //corridas! : Corrida[]
    corridasPrimeiroMotorista !: Corrida[];
    corridasSegundoMotorista !: Corrida[];
}