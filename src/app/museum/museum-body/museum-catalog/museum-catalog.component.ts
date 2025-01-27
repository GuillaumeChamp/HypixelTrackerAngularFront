import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {IMuseumItem} from '../../museum-entities/IMuseumItem';
import {MuseumItemComponent} from './museum-item/museum-item.component';

@Component({
  selector: 'app-museum-catalog',
  imports: [
    NgForOf,
    MuseumItemComponent
  ],
  templateUrl: './museum-catalog.component.html',
  styleUrl: './museum-catalog.component.css'
})
export class MuseumCatalogComponent {
  @Input() itemList!: IMuseumItem[];
  hideOwned = false;

  getItemToDisplay() : IMuseumItem[]{
    return this.hideOwned ? this.itemList.filter(item=>!item.owned) : this.itemList;
  }
}
