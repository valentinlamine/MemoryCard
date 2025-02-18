import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/categories">Categories</a></li>
        <li><a routerLink="/themes">Themes</a></li>
        <li><a routerLink="/cards">Cards</a></li>
        <li><a routerLink="/review">Review</a></li>
        <li><a routerLink="/user">User</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 10px;
    }
  `]
})
export class AppComponent {}
