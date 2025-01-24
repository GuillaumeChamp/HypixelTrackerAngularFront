import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-raw-header',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './raw-header.component.html',
  styleUrl: './raw-header.component.css'
})
export class RawHeaderComponent {
  @Input() title! : string;
  @Output() toggleDrawerRequest = new EventEmitter();

  askToggleDrawer() {
    this.toggleDrawerRequest.emit();
  }
}
