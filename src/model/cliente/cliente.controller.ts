import { Controller, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './cliente.dto';

@Controller('cliente')
export class ClienteController {

    constructor(private clienteService: ClienteService) { }

    @Post()
    criarCliente(cliente: any){
        return this.clienteService.criarCliente(cliente);
    }

    @Post()
    comprar(cliente: any){
        //return this.clienteService.comprar(cliente);
    }

    @Post('visualizar/:id')
    visualizarCliente(id: number){
        return this.clienteService.visualizarCliente(id);
    }

    @Post('visualizar/todos')
    visualizarTodosClientes(){
        return this.clienteService.visualizarTodosClientes();
    }

}
