import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClienteDto } from './cliente.dto';
import { STATUS_CODES } from 'http';
import { HTTP_CODE_METADATA } from '@nestjs/common/constants';

@Injectable()
export class ClienteService {

    private clientes: ClienteDto[] = [];

    criarCliente(cliente: ClienteDto): ClienteDto {
        this.clientes.push(cliente);
        return cliente;
    }

    // comprar(cliente: ClienteDto): ClienteDto{
        
    // }

    visualizarCliente(id: number): ClienteDto {
        const encontrarCliente = this.clientes.filter(c => c.id === id);

        if (encontrarCliente.length){
            return encontrarCliente[0];
        }
        throw new HttpException(`Cliente com id ${id} não encontrado`, HttpStatus.BAD_REQUEST);

    }

    visualizarTodosClientes(): ClienteDto[] {
        return this.clientes;
    }

    atualizarCliente(cliente: ClienteDto) {
        let clienteIndex = this.clientes.findIndex(c => c.id === cliente.id);
        if (clienteIndex >= 0) {
            this.clientes[clienteIndex] = cliente;
            console.log('Cliente atualizado', cliente);
            return cliente;
        }
        throw new HttpException(`Cliente com id ${cliente.id} não encontrado`, HttpStatus.BAD_REQUEST);
    }
    removerCliente(id: number){
        let clienteIndex = this.clientes.findIndex(c => c.id === id);

        if(clienteIndex >= 0){
            this.clientes.splice(clienteIndex, 1);
            console.log('Cliente removido', id);
            return id;
        }

        throw new HttpException(`Cliente com id ${id} não encontrado`, HttpStatus.BAD_REQUEST);
    }
}