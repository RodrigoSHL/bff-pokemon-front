import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}
  findOneByPost(body: any) {
    return 'This action adds a new pokemon';
  }

  findOneByGet(id: string) {
    return this.httpService
      .get(`http://localhost:3001/pokemon/${id}`)
      .pipe(map((response) => response.data));
  }
}
