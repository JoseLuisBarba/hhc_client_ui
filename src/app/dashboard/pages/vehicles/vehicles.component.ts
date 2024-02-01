import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VehiclesComponent { }
