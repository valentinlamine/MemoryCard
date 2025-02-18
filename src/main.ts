import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', loadComponent: () => import('./app/categories/categories.component').then(m => m.CategoriesComponent) },
  { path: 'themes', loadComponent: () => import('./app/themes/themes.component').then(m => m.ThemesComponent) },
  { path: 'cards', loadComponent: () => import('./app/cards/cards.component').then(m => m.CardsComponent) },
  { path: 'review', loadComponent: () => import('./app/review/review.component').then(m => m.ReviewComponent) },
  { path: 'user', loadComponent: () => import('./app/user/user.component').then(m => m.UserComponent) },
  { path: '**', redirectTo: '/categories' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
