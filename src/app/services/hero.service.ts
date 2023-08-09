import { Observable, of } from 'rxjs'

import { Injectable } from '@angular/core'

import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHero(id: number | undefined): Observable<Hero | undefined> {
    const hero = HEROES.find((h) => h.id === id);
    if (hero) {
      this.messageService.add(`HeroService: fetched hero id=${hero.id}`);
    }
    return of(hero);
  }

  getAllHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes from mock');
    return heroes;
  }
}
