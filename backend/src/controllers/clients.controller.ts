import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from '../services/clients.service';
import { Client } from '../entities/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clients.findAll();
  }

  @Post()
  create(@Body() data: Partial<Client>): Promise<Client> {
    return this.clients.create(data);
  }
}
