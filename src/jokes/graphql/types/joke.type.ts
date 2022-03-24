import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Joke')
export class JokeType {
  @Field(() => [String])
  categories: string[];

  @Field(() => String)
  created_at: string;

  @Field(() => String)
  icon_url: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  updated_at: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  value: string;
}
