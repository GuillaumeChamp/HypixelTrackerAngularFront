import { Component } from '@angular/core';
import {ProfileSelectorComponent} from './profile-selector/profile-selector.component';
import {MuseumQueryService} from '../../services/museum-query.service';
import {MuseumCatalogComponent} from './museum-catalog/museum-catalog.component';

@Component({
  selector: 'app-museum-body',
  imports: [
    ProfileSelectorComponent,
    MuseumCatalogComponent
  ],
  templateUrl: './museum-body.component.html',
  styleUrl: './museum-body.component.css'
})
export class MuseumBodyComponent {
  itemList: any;

  constructor(private readonly museumQuery: MuseumQueryService) {
    this.updateItemList();
  }

  updateItemList() {
    this.museumQuery.getAllMuseumItem().subscribe(itemList => {
      this.itemList = itemList;
    })
  }

}
