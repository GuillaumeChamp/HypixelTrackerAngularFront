import {Component, OnInit} from '@angular/core';
import {NavDrawerComponent} from '../shared/nav-drawer/nav-drawer.component';
import {BazaarHeaderComponent} from './bazaar-header/bazaar-header.component';
import {BazaarCatalogComponent} from './bazaar-catalog/bazaar-catalog.component';
import {ItemService} from './item.service';
import {ItemModelUtils} from './bazaarEntities/ItemModelUtils';

@Component({
  selector: 'app-bazaar',
  imports: [
    NavDrawerComponent,
    BazaarHeaderComponent,
    BazaarCatalogComponent
  ],
  templateUrl: './bazaar.component.html',
  styleUrl: './bazaar.component.css'
})
export class BazaarComponent implements OnInit {
  itemList: any;
  filter: string = '';
  drawerOpen: boolean = false;

  constructor(private readonly itemService: ItemService) {
  }

  ngOnInit() {
    this.updateData()
  }

  updateData() {
    this.itemService.getItemList().subscribe(itemList => {
      itemList.sort((item1, item2) => ItemModelUtils.compare(item1, item2))
      itemList.forEach(item => ItemModelUtils.determineOpportunity(item))
      this.itemList = itemList;
    });
  }

  updateFilter() {
    this.filter = (document.getElementById("search-bar") as HTMLInputElement).value ?? ''
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}
