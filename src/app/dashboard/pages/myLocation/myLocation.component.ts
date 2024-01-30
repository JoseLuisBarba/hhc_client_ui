import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-location',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './myLocation.component.html',
  styleUrl: './myLocation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyLocationComponent { 


  constructor() {}


  goToMyLocation() {
    console.log('Ir a mi ubicación');
  }

}
