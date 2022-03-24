import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const JOKE_TABLE_NAME = "favorites_jokes";

@Entity({name: JOKE_TABLE_NAME})
export class JokeEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  value: string;
}
