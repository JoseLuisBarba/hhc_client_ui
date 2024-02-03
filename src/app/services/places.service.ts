import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Feature, PlacesResponse } from "@interfaces/places";
import { PlacesApiClient } from "../api/placesApiClient";

@Injectable({
    providedIn: 'root'
})

export class PlacesService {

    public userLocation?: [number, number];
    public isLoadingPlaces: boolean = false;
    public places: Feature[] = [];


    constructor(private placesApi: PlacesApiClient) {
        this.getUserLocation();
    }
    
    get isUserLocationReady(): boolean {
        return !!this.userLocation
    }


    public async getUserLocation(): Promise<[number, number]> {
        return new Promise( (resolve, reject) => {

            navigator.geolocation.getCurrentPosition(
                ({coords}) => {
                    this.userLocation = [coords.longitude, coords.latitude];
                    resolve(this.userLocation);
                }, (err) => {
                    alert('No se pudo obtener la geolocalización');
                    console.log(err);
                    reject();
                }
            );
        });
    } 


    getPlacesByQuery(query: string= '') {

        if (!this.userLocation) {
            throw Error('No hay User Location.')
        }

        this.isLoadingPlaces = true;
        this.placesApi.get<PlacesResponse>(`/${query}.json`, { 
            params: {
                proximity: this.userLocation?.join(',')
            }
        })
            .subscribe(resp => {
                this.isLoadingPlaces = false;
                this.places = resp.features;
                console.log(this.places);
            });
    }

    
}