import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Marca } from '../../marcas/entities/marca.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column({ length: 100, unique: true })
  codigoBarras: string;

  @Column({ nullable: true })
  imagemUrl: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    eager: true,
  })
  categoria: Categoria;

  @ManyToMany(() => Marca, { eager: true })
  @JoinTable()
  marcas: Marca[];

  @CreateDateColumn()
  dataCadastro: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;
}
