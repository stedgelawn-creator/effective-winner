import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from '../entities/visit.entity';
import { VisitsService } from '../services/visits.service';
import { VisitsController } from '../controllers/visits.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Visit])],
  providers: [VisitsService],
  controllers: [VisitsController],
})
export class VisitsModule {}
