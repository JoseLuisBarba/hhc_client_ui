import { Injectable } from '@angular/core';
import { LngLat, LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  #map?: Map;


  get isMapReady(): boolean {
    return !!this.#map;
  }

  setMap(map: Map): void  {
    this.#map = map;
  }

  flyTo(coords: LngLatLike) {
    if ( !this.isMapReady) {
      throw Error('El mapa no está inicializado');
    }

    this.#map?.flyTo({
      zoom: 14,
      center: coords
    });

  }

  constructor() {

  }

}
