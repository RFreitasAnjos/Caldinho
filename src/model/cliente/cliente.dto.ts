import { HistoricoDto } from "src/model/historico/historico.dto";

export class ClienteDto {
    id: number;
    nome: string;
    data_nascimento: Date;
    endereco: string;
    numero: string;
    email: string;
    historico: HistoricoDto;
}