import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProdutoDto } from './produto.dto';
import { CarrinhoService } from '../carrinho/carrinho.service';	

@Injectable()
export class ProdutoService {

    private produto: ProdutoDto[]= [];

    criarProduto(produto: ProdutoDto) {
        return this.produto.push(produto);
    }

    deletarProduto(id: number): void {
        const index = this.produto.findIndex(produto => produto.produtoId === id);
        if (index === -1) {
            throw new Error('Produto não encontrado');
        }
        this.produto.splice(index, 1);
    }

    alterarProduto(produto: ProdutoDto) {
        let index = this.produto.findIndex(p => p.produtoId === produto.produtoId);
        
        if (index >= 0) {
            this.produto[index] = produto;
            console.log('Produto alterado com sucesso!');
        }
        throw new HttpException(`Produto id: ${index} não encontrado`, HttpStatus.BAD_REQUEST);
    }

    adicionarAoCarrinho(id: number, produtoId: number): String {
        const carrinhoService = new CarrinhoService();
        
        let indexProduto = this.produto.findIndex(p => p.produtoId === id);
        if (!indexProduto) {
            throw new HttpException(`Produto id: ${id} não encontrado`, HttpStatus.BAD_REQUEST);    
        }
        //carrinhoService.adicionarProduto();
        return `adiciona o produto ${produtoId} ao carrinho do: ${id}`;
    }
}
