import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HousingLocation} from '../housinglocation.interface';
import {HousingService} from '../services/housing.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit {
  housingLocation: HousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private homeService: HousingService
  ) {
  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation = this.homeService.getHousingLocationById(id);
  }
}
