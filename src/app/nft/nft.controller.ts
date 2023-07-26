
import { Controller, Post, Body } from '@nestjs/common';
import { NFTService } from './nft.service';
import { Nft } from './nft.entity';

@Controller('nft')
export class NFTController {
  constructor(private readonly nftService: NFTService) {}

  @Post()
  async saveNft(
    @Body() nftData: Nft
  ) {
    return this.nftService.saveNFT(nftData);
  }
  
}
