import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ListingService {
  constructor(@InjectRepository(Listing) private repo: Repository<Listing>) {}

  async create(dto: CreateListingDto, ownerId: string): Promise<Listing> {
    const listing = this.repo.create({ ...dto, owner: { id: ownerId } });
    return await this.repo.save(listing);
  }

  async findAll(): Promise<Listing[]> {
    return this.repo.find({ relations: ['owner'], order: { createdAt: 'DESC' } });
  }

  async findOne(id: string): Promise<Listing> {
    const listing = await this.repo.findOne({ where: { id }, relations: ['owner'] });
    if (!listing) throw new NotFoundException('Listing not found');
    return listing;
  }

  async update(id: string, dto: UpdateListingDto): Promise<Listing> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
