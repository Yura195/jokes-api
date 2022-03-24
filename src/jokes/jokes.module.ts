import { JokeEntity } from './entities/joke.entity';
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { JokesResolver } from './jokes.resolver';
import { JokesService } from './jokes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [JokesService, JokesResolver],
  imports: [
    TypeOrmModule.forFeature([
      JokeEntity
    ]),
    HttpModule],
  exports: [JokesService],
})
export class JokesModule {}