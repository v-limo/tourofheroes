import { Component, OnInit } from '@angular/core'

import { HousingLocation } from '../housinglocation.interface'
import { HousingService } from '../services/housing.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  
  housingLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {}
  ngOnInit(): void {
    this.housingLocationList = this.getAllHousingLocations();
  }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingService.getAllHousingLocations();
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingService.getHousingLocationById(id);
  }
}
