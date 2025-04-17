import { ApiProperty } from "@nestjs/swagger";

export class ProdutoDto {
    @ApiProperty({example: 1, description: 'ID do produto' })
    produtoId: number;
    @ApiProperty({example: 'Produto Exemplo', description: 'Nome do produto' })
    nomeProduto:string;
    descricao: string;
    categoriaProduto: string;
    quantidadeEstoque: number;
    @ApiProperty({example: 100.00, description: 'Valor do produto' })
    valor: number;
    disponivel: boolean;
    static disponivel: ProdutoDto;
}