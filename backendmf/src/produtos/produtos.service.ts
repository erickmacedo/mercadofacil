import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoentity: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  async findAll() {
    try {
      const produtos = await this.produtoentity.find();
      return produtos;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar produtos');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
