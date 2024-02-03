import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlacesService } from '@services/places.service';
import LoadingComponent from '../loading/loading.component';
import MapViewComponent from '../mapView/mapView.component';
import LogoComponent from '../logo/logo.component';
import MyLocationComponent from '../myLocation/myLocation.component';
import SearchBarComponent from '../searchBar/searchBar.component';



@Component({
  selector: 'app-map-screen',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    MapViewComponent,
    LogoComponent,
    MyLocationComponent,
    SearchBarComponent
  ],
  templateUrl: './mapScreen.component.html',
  styleUrl: './mapScreen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MapScreenComponent { 

  constructor( private placesService: PlacesService) {
    
  }


  get isUserLocationReady() {
    console.log(this.placesService.isUserLocationReady);
    return this.placesService.isUserLocationReady;
  }


  
}
