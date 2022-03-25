import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const JOKE_TABLE_NAME = 'favorites_jokes';

@Entity({ name: JOKE_TABLE_NAME })
@ObjectType()
export class JokeEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column({ type: 'varchar' })
  @Field()
  value: string;
}
