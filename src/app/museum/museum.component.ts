import { Component } from '@angular/core';
import {FooterComponent} from "../shared/footer/footer.component";
import {NavDrawerComponent} from "../shared/nav-drawer/nav-drawer.component";
import {RawHeaderComponent} from '../shared/raw-header/raw-header.component';
import {MuseumBodyComponent} from './museum-body/museum-body.component';

@Component({
  selector: 'app-museum',
  imports: [
    FooterComponent,
    NavDrawerComponent,
    RawHeaderComponent,
    MuseumBodyComponent
  ],
  templateUrl: './museum.component.html',
  styleUrl: './museum.component.css'
})
export class MuseumComponent {
  drawerOpen: boolean = false;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
