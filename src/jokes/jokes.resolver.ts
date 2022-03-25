import { JokeEntity } from './entities/joke.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JokeTextSearchType } from './graphql/types/joke-text-search.type';
import { JokeType } from './graphql/types/joke.type';
import { ChuckResponse } from './interfaces/chuck-response.interface';
import { JokesService } from './jokes.service';

@Resolver()
export class JokesResolver {
  constructor(private readonly _jokesService: JokesService) {}
  @Query(() => [JokeType])
  async getRandomJoke(
    @Args('limit', { type: () => Int }) limit: number
  ):Promise<Promise<ChuckResponse>[]> {
    return this._jokesService.getRandomJoke(limit);
  }

  @Query(() => [JokeType])
  async getRandomJokeByCategory(
    @Args('limit', { type: () => Int }) limit: number,
    @Args('category', { type: () => String }) category: string,
  ):Promise<Promise<ChuckResponse>[]> {
    return this._jokesService.getRandomJokeByCategory(limit, category);
  }

  @Query(() => JokeTextSearchType)
  async getJokeByTextSearch(
    @Args('text', { type: () => String }) text: string,
    @Args('limit', { type: () => Int }) limit: number,
  ):Promise<Promise<ChuckResponse>[]> {
    return this._jokesService.getJokeByTextSearch(text, limit);
  }

  @Query(()=>JokeEntity)
  async addJokeToFavorite(
    @Args('id', { type: () => String }) id: string
  ) {
  return this._jokesService.addJokeToFavorite(id)
  }

  @Query(()=>[JokeEntity])
  async showFavoriteJoke() {
    return this._jokesService.showFavoriteJoke()
  }
}
