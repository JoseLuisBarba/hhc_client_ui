import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Feature } from '@interfaces/places';
import { PlacesService } from '@services/places.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './searchResults.component.html',
  styleUrl: './searchResults.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultsComponent {


  constructor(private placesService: PlacesService) {

  }

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }


  get places(): Feature[] {
    return this.placesService.places;
  }

}
