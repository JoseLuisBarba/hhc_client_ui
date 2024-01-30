
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SidemenuComponent,
    FooterComponent
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
