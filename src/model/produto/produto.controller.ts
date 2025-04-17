import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './produto.dto';
import { CarrinhoService } from 'src/model/carrinho/carrinho.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService, carrinhoService: CarrinhoService){}
    
    @Post()
    @ApiResponse({ status: 200, description: 'Produto criado com sucesso.' })
    create(@Body() produto: ProdutoDto) {
        return this.produtoService.criarProduto(produto);
    }
    
    @Put()
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
    update(@Body() produto: ProdutoDto) {
        return this.produtoService.alterarProduto(produto);
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: 'Produto deletado com sucesso.' })
    deletarProduto(@Param('id') id: number) {
        return this.produtoService.deletarProduto(id);
    }

    @Get('carrinho/')
    @ApiResponse({ status: 200, description: 'Carrinho retornado com sucesso.' })
    adicionarAoCarrinho(@Body('id') id: number,produtoId: number) {
        return this.produtoService.adicionarAoCarrinho(id,produtoId);
    }
}
