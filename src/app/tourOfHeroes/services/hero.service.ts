import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HEROES } from '../../shared/mock-heroes';
import { Hero, IHeroDetailResponse, IHeroResponse } from '../hero.interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  readonly heroesUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHero(
    url: string | undefined
  ): Observable<IHeroDetailResponse | undefined> {
    const reponse = this.http.get<IHeroDetailResponse>(`${url}`);
    this.messageService.add(`HeroService: fetched hero id=${url}`);
    return reponse;
  }

  getAllHeroes(): Observable<IHeroResponse> {
    // const heroes = of(HEROES);
    const response = this.http.get<IHeroResponse>(this.heroesUrl);
    this.messageService.add('HeroService: fetched heroes from mock');
    return response;
  }
}
