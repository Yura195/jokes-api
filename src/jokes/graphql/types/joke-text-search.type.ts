import { Field, Int, ObjectType } from '@nestjs/graphql';
import { JokeType } from './joke.type';

@ObjectType('JokeTextSearch')
export class JokeTextSearchType {
  @Field(() => Int)
  total: number;

  @Field(() => [JokeType])
  result: JokeType[];
}
