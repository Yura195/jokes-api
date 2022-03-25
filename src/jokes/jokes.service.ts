import { JokeEntity } from './entities/joke.entity';
import { HttpService } from '@nestjs/axios';
import { ChuckResponse } from './interfaces/chuck-response.interface';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';
import { API_ROOT } from './jokes.constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(JokeEntity)
    private readonly _jokeRepository: Repository<JokeEntity>,
    private readonly _httpService: HttpService,
  ) {}

  async getRandomJoke(limit: number): Promise<Promise<ChuckResponse>[]> {
    const API_RANDOM = API_ROOT + 'random';
    try {
      if (limit) {
        let arrayRequests = await [];
        for (let i = 0; i < limit; i++) {
          arrayRequests.push(
            await lastValueFrom(this._httpService.get(API_RANDOM)),
          );
        }
        const data = arrayRequests.map(async (el) => {
          return el.data;
        });
        return data;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async getRandomJokeByCategory(
    limit: number,
    category: string,
  ): Promise<Promise<ChuckResponse>[]> {
    const API_RANDOM_CATEGORY = API_ROOT + `random?category=${category}`;
    try {
      if (limit) {
        let arrayRequests = [];
        for (let i = 0; i < limit; i++) {
          arrayRequests.push(
            await lastValueFrom(this._httpService.get(API_RANDOM_CATEGORY)),
          );
        }
        const data = arrayRequests.map((el) => el.data);
        return data;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async getJokeByTextSearch(
    text: string,
    limit: number,
  ): Promise<Promise<ChuckResponse>[]> {
    const API_RANDOM_TEXT_SEARCH = API_ROOT + `search?query=${text}`;
    try {
      const { data } = await lastValueFrom(
        this._httpService.get(API_RANDOM_TEXT_SEARCH),
      );
      if (limit) {
        data.result.splice(0, limit);
      }
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async addJokeToFavorite(id: string) {
    const API_FAVORITE = API_ROOT + id;
    try {
      const { data } = await lastValueFrom(this._httpService.get(API_FAVORITE));
      const joke = new JokeEntity();
      joke.value = data.value;
      return await this._jokeRepository.save(joke);
    } catch (err) {
      throw new Error(err);
    }
  }

  async showFavoriteJoke() {
    return await this._jokeRepository.find()
  }
}
