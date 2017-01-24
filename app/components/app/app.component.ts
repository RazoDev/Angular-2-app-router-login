import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <nav>
    <div class="nav-wrapper">
    	<a [routerLink]="['/']" class="brand-logo right">Curso de Angular 2</a>
    	<ul id="nav-mobile" class="left">

    		<li><a [routerLink]="['/']">Home</a></li>
    		<li><a [routerLink]="['/contact']">Contact</a></li>
    		<li><a [routerLink]="['/profile']">Profile</a></li>
    		<li><a [routerLink]="['/dashboard']">Dashboard</a></li>

        <li [ngSwitch] = "authService.isLoggedIn" >
          <a *ngSwitchCase = "false" [routerLink]="['/login']">Login</a>
          <a *ngSwitchCase = "true" (click)="logout()">Logout</a>
        </li>

    	</ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  constructor(public authService: AuthService, public router: Router) {}

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
 }
