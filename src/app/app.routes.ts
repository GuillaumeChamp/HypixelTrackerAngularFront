import {Routes} from '@angular/router';
import {BazaarComponent} from './bazaar/bazaar.component';
import {MuseumComponent} from './museum/museum.component';

export const routes: Routes = [
  {path: '', redirectTo: '/bazaar', pathMatch: 'full'},
  {path: 'bazaar', component: BazaarComponent, title: 'Bazaar Display'},
  {path: 'museum', component: MuseumComponent, title: 'Museum tracker'},
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];
