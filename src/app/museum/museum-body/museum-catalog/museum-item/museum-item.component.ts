import {Component, Input} from '@angular/core';
import {IMuseumItem} from '../../../museum-entities/IMuseumItem';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-museum-item',
  imports: [
    NgIf
  ],
  templateUrl: './museum-item.component.html',
  styleUrl: './museum-item.component.css'
})
export class MuseumItemComponent {
  @Input() item! : IMuseumItem

}
