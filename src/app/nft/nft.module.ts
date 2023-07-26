import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Nft } from "./nft.entity";
import { NFTController } from "./nft.controller";
import { NFTService } from "./nft.service";

@Module({
    imports: [TypeOrmModule.forFeature([Nft])],
    controllers: [NFTController],
    providers: [NFTService],
  })
export class NftModule {}