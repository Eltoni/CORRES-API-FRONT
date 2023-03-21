import { Corrida } from "src/app/corridas/models/Corrida";

export class Veiculo {
  id!: string;
  placa!: string;
  modelo!: string;
  ano!: number;
  //corrida!: string
  corridas! : Corrida[]
}
