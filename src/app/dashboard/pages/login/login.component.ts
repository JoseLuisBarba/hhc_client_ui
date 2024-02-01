import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  
  imageUrl!:SafeUrl; 

  constructor(private sanitizer: DomSanitizer) {
    const imgRoute = 'assets/images/login/login.svg';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imgRoute);
  }

}
