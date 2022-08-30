import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  findPokemonPost(@Body() body: any): Promise<any> {
    return this.pokemonService.findOneByPost(body);
  }

  @Get(':id')
  findPokemonGet(@Param('id') id: string) {
    return this.pokemonService.findOneByGet(id);
  }
}
