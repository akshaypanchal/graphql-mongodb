import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Lession {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;
}
