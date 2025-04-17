import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CarrinhoDto {
    
    id: number;
    clienteId: number;
    produtoId: number;
    nomeProduto: string;
    preco: number;
    quantidade: number;
    dataCompra: Date;
}