import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from '../entities/visit.entity';
import { Client } from '../entities/client.entity';

@Injectable()
export class VisitsService {
  constructor(@InjectRepository(Visit) private repo: Repository<Visit>) {}

  findAll(): Promise<Visit[]> {
    return this.repo.find({ relations: ['client'] });
  }

  create(data: Partial<Visit>): Promise<Visit> {
    const visit = this.repo.create(data);
    return this.repo.save(visit);
  }
}
