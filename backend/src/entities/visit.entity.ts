import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Client } from './client.entity';

@Entity()
export class Visit extends BaseEntity {
  @Column()
  scheduledAt: Date;

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => Client, (client) => client.visits)
  client: Client;
}
