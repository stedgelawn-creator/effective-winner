import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client) private repo: Repository<Client>) {}

  findAll(): Promise<Client[]> {
    return this.repo.find();
  }

  create(data: Partial<Client>): Promise<Client> {
    const client = this.repo.create(data);
    return this.repo.save(client);
  }
}
