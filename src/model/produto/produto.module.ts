import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ClienteService } from '../cliente/cliente.service';

@Module({
    imports: [ClienteService, CarrinhoService],
    controllers: [ProdutoController],
    providers: [ProdutoService]
})
export class ProdutoModule {}
