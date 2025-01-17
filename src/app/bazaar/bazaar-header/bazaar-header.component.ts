import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-bazaar-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './bazaar-header.component.html',
  styleUrl: './bazaar-header.component.css'
})
export class BazaarHeaderComponent {
  @Output() newSearchEvent = new EventEmitter();
  @Output() updateRequest = new EventEmitter();
  @Output() toggleDrawerRequest = new EventEmitter();

  newSearch() {
    this.newSearchEvent.emit();
  }

  askNewRequest() {
    this.updateRequest.emit();
  }

  askToggleDrawer() {
    this.toggleDrawerRequest.emit();
  }
}
