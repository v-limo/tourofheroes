import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero.interface'
import { HeroService } from '../services/hero.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  searchedHeros: Hero[] = [];
  seletedHero?: Hero;
  searchTerm: string = 'fdfdsfds';

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes.results;
        this.messageService.add('HeroesComponent: fetched heroes');
      },
    });
  }

  // method not used but keeping for reference
  onSelect(hero: Hero) {
    this.seletedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.name}`);
  }

  searchHero(searchTerm: string): void {
    this.searchedHeros = this.heroes.filter((hero) => {
      return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
