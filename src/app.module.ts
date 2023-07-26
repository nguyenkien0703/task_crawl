import { Module } from '@nestjs/common';
import { Nft } from './app/nft/nft.entity';
import { NftModule } from './app/nft/nft.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kien123',
      database: 'crawl',
      entities: [Nft],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Nft]),
    NftModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
