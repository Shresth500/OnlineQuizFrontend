import { Component } from '@angular/core';
import { AuthService } from '../../common/auth/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    CommonModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbNavModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isNavbarCollapsed: boolean = true;
  constructor(private auth: AuthService) {
    console.log(this.auth.getRole());
  }
  getRole() {
    return this.auth.getRole();
  }
  logout() {
    //console.log('Logged out');
    this.auth.logout();
  }
}
