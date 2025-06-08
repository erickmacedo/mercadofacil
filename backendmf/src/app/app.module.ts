import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from 'src/produtos/produtos.module';
import { MarcasModule } from 'src/marcas/marcas.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'mercadofacil',
      autoLoadEntities: true,
      synchronize: true, // não deve ser usado em produção
    }),
    ProdutosModule,
    MarcasModule,
    CategoriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
