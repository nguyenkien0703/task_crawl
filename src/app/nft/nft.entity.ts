
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('nfts')
export class Nft extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'token_id', type: 'integer', width: 11 })
  public tokenId: number;

  @Column({ nullable: true, name: 'token_uri', type: 'varchar', width: 300 })
  public tokenUri: string;

  @Column({ name: 'chain_id', nullable: false, type: 'integer', width: 11 })
  chainId: number;

  @Column()
  name: string;
  @Column()
  seller: string ;
  


  @Column()
  price: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

}
