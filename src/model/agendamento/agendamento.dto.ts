import { ClienteDto } from "src/model/cliente/cliente.dto";

export class AgendamentoDto {
    id: Number;
    cliente: ClienteDto;
    quantidadeAcompanhante: Number;
    dataCriada: Date;
    dataAgendamento:Date;
}