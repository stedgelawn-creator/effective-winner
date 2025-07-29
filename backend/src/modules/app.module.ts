import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients.module';
import { VisitsModule } from './visits.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'fieldservice',
      entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    ClientsModule,
    VisitsModule,
  ],
})
export class AppModule {}
