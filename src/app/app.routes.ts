import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Store } from './pages/store/store';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'store',
    component: Store,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
