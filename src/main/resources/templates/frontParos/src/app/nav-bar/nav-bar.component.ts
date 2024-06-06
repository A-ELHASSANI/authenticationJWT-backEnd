// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthServiceService) { }



  onLogout() {
    this.authService.logout();
  }
}
