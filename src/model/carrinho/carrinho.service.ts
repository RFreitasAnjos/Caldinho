import { Injectable } from '@nestjs/common';
import { CarrinhoDto } from './carrinho.dto';
import { ProdutoDto } from 'src/model/produto/produto.dto';
import { ClienteDto } from '../cliente/cliente.dto';

@Injectable()
export class CarrinhoService {

    private carrinho: CarrinhoDto[] = [];

    adicionarProduto(produto: ProdutoDto, cliente: ClienteDto): CarrinhoDto {
        const carrinhoItem: CarrinhoDto = {
            id: this.carrinho.length + 1,
            clienteId: cliente.id,
            produtoId: produto.produtoId,
            nomeProduto: produto.nomeProduto,
            preco: produto.valor,
            quantidade: produto.quantidadeEstoque,
            dataCompra: new Date(),
        };

        this.carrinho.push(carrinhoItem);
        return carrinhoItem;
    }
    listarCarrinho(): CarrinhoDto[] {
        return this.carrinho;
    }
    removerProduto(id: number): void {
        const index = this.carrinho.findIndex(item => item.id === id);
        if (index !== -1) {
            this.carrinho.splice(index, 1);
        } else {
            throw new Error('Produto não encontrado no carrinho');
        }
    }
    limparCarrinho(): void {
        this.carrinho = [];
    }
    calcularTotal(): number {
        return this.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }
}
