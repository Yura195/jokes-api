import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { JokesService } from "./jokes.service";

@Module({
    providers: [JokesService],
    imports: [HttpModule],
    exports: []
})
export class JokesModule {}