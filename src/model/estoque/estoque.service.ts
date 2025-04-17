import { Injectable } from '@nestjs/common';
import { EstoqueDto } from './estoque.dto';

@Injectable()
export class EstoqueService {

    private estoque: EstoqueDto[] = [];

    consultaEstoque(): EstoqueDto[] {
        return this.estoque;
    }
}
