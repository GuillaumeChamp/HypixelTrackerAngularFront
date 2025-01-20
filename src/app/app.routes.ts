import {Routes} from '@angular/router';
import {BazaarComponent} from './bazaar/bazaar.component';

export const routes: Routes = [
  {path: '', redirectTo: '/bazaar', pathMatch: 'full'},
  {path: 'bazaar', component: BazaarComponent, title: 'Bazaar Display'},
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];
