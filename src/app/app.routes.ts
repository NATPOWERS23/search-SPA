import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Homepage',
  },
  {
    path: 'article/:id',
    loadComponent: () =>
      import('./pages/article/article.component').then(
        (m) => m.ArticleComponent
      ),
    title: 'Article Page',
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
