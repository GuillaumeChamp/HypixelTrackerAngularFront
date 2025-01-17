import {Component} from '@angular/core';
import {BazaarComponent} from './bazaar/bazaar.component';

@Component({
  selector: 'app-root',
  imports: [BazaarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HypixelTrackerAngularFront';
}
