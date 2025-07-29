import { Controller, Get, Post, Body } from '@nestjs/common';
import { VisitsService } from '../services/visits.service';
import { Visit } from '../entities/visit.entity';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visits: VisitsService) {}

  @Get()
  findAll(): Promise<Visit[]> {
    return this.visits.findAll();
  }

  @Post()
  create(@Body() data: Partial<Visit>): Promise<Visit> {
    return this.visits.create(data);
  }
}
