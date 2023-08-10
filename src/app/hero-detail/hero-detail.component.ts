import { Observable, Subscription } from 'rxjs'

import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Hero } from '../hero'
import { HeroService } from '../services/hero.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero?: Hero;
  id?: number;
  substription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private messagesService: MessageService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    // alternative to using the observable
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        this.messagesService.add(
          `HeroDetailComponent: fetched hero id=${this.id}`
        );
      },
    });
    this.getHero();
  }

  getHero(): void {
    if (this.id) {
      this.heroService.getHero(this.id).subscribe({
        next: (hero) => {
          this.hero = hero;
          this.messagesService.add(
            `HeroDetailComponent: fetched hero id=${this.id}`
          );
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.substription?.unsubscribe();
  }
}
