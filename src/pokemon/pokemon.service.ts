import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
const url = `http://localhost:3001/pokemon`;
@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}
  async findOneByPost(payload: any) {
    return this.httpService
      .post(`http://localhost:3001/pokemon`, payload)
      .pipe(map((response) => response.data));
  }

  findOneByGet(id: string) {
    return this.httpService
      .get(`http://localhost:3001/pokemon/${id}`)
      .pipe(map((response) => response.data));
  }
}
