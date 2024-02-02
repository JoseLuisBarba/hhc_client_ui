import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent implements OnInit{ 



  public menuItems = routes
    .map(  route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path?.includes(':'));

 
  status: boolean= false; 
  closeStatus: boolean = false;

  constructor() {
    this.status = false;
    this.closeStatus = false;
  }

  ngOnInit(): void {
    this.status = false;
    this.closeStatus = false;
  }

  onAction(): boolean {
    this.status = !this.status;
    return this.status;
  }

  closeNav(): boolean {
    this.closeStatus = !this.closeStatus;
    return this.status;
  }


}
