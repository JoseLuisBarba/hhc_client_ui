import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './userCreate.component.html',
  styleUrl: './userCreate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserCreateComponent { }
