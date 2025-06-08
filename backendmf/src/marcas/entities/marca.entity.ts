import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Produto } from '../../produtos/entities/produto.entity';

@Entity()
export class Marca {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  nome: string;

  @Column({ nullable: true })
  logoUrl: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToMany(() => Produto, (produto) => produto.marcas)
  produtos: Produto[];
}
