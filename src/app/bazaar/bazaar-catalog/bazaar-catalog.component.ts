import {
  Component,
  Input,
} from '@angular/core';
import {IItemModel} from '../bazaarEntities/IItemModel';
import {NgForOf} from '@angular/common';
import {BazaarItemDetailsComponent} from './bazaar-item-details/bazaar-item-details.component';
import {BazaarItemHistoryChartComponent} from './bazaar-item-history-chart/bazaar-item-history-chart.component';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ItemModelUtils} from '../bazaarEntities/ItemModelUtils';

@Component({
  selector: 'app-bazaar-catalog',
  imports: [
    NgForOf,
    BazaarItemDetailsComponent,
  ],
  templateUrl: './bazaar-catalog.component.html',
  styleUrl: './bazaar-catalog.component.css',
  providers: [DialogService]
})
export class BazaarCatalogComponent {
  @Input() itemList!: IItemModel[];
  @Input() filter : any;
  selectedItem: any;
  ref: DynamicDialogRef | undefined;

  constructor(private readonly dialogService: DialogService) {
  }

  promptDetails(item: IItemModel) {
    console.log(this.itemList.filter((item)=>item.tier===undefined))
    this.selectedItem = item;
    let craftString = ItemModelUtils.stringifyCraft(this.selectedItem, this.itemList);
    this.ref = this.dialogService.open(BazaarItemHistoryChartComponent, {
      data: {
        item: item,
        craftString: craftString,
      },
      header: item.name,
      width: '80%',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 5000,
      closable: true,
      closeOnEscape: true,
      dismissableMask: true,
      modal: true,
    })

    this.ref.onClose.subscribe()
  }

  getPrintableElement() : IItemModel[] | undefined {
    if (!this.itemList){
      return undefined;
    }
    return this.itemList.filter((value) => {return value.pricing && ItemModelUtils.matchFilter(this.filter,value)});
  }
}
