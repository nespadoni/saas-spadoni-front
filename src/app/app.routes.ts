import { Routes } from '@angular/router';
import {Home} from './features/public-area/home/home';

export const routes: Routes = [
  {
    path: 'auth', // O segmento principal da URL
    loadChildren: () => import('./features/auth/auth-routing-module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];
