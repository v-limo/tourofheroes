import { Observable, Subscription } from 'rxjs';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero, IHeroDetailResponse } from '../hero.interface';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero?: IHeroDetailResponse;
  urlId?: string;
  substription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private messagesService: MessageService,
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // alternative to using the observable
    // this.id = Number(this.route.snapshot.paramMap.get('urlId'));
    this.route.paramMap.subscribe({
      next: (params) => {
        this.urlId = params.get('urlId') || '';
        this.messagesService.add(
          `HeroDetailComponent: fetched hero id=${this.urlId}`
        );
      },
    });
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHero(this.urlId).subscribe({
      next: (hero) => {
        this.hero = hero;
        this.messagesService.add(
          `HeroDetailComponent: fetched hero id=${this.urlId}`
        );
      },
    });
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.substription?.unsubscribe();
  }
}
