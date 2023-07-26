
import { Injectable } from '@nestjs/common';
import { Nft } from './nft.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NFTService {
    constructor(
      @InjectRepository(Nft) private readonly nftRepository: Repository<Nft>
    ) {}

  async saveNFT(nftData: any): Promise<Nft> {
    const nft = new Nft();
    nft.tokenId = nftData.tokenId;
    nft.tokenUri = nftData.tokenUri;
    nft.chainId = nftData.chainId;
    nft.name = nftData.name;
    nft.seller = nftData.seller;
    nft.price = nftData.price;
    return this.nftRepository.save(nft);
  }
}
