import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  imports: [],
  templateUrl: './nav-drawer.component.html',
  styleUrl: './nav-drawer.component.css'
})
export class NavDrawerComponent {
  @Input() isDrawerVisible: boolean = false;

}
