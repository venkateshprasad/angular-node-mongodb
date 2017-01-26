import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/register" routerLinkActive="active">Register</a>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/events" routerLinkActive="active">Events</a>
    <a routerLink="/news/1" routerLinkActive="active">News</a>
    <a routerLink="/info" routerLinkActive="active">Info</a>
  </nav>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
