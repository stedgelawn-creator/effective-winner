import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Visit } from './visit.entity';

@Entity()
export class Client extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  email?: string;

  @OneToMany(() => Visit, (visit) => visit.client)
  visits: Visit[];
}
