import {Component, Input} from '@angular/core';
import {IItemModel} from '../../bazaarEntities/IItemModel';
import {DecimalPipe, NgIf} from '@angular/common';
import {BazaarConst} from '../../bazaarEntities/bazaarConst';

@Component({
  selector: 'app-bazaar-item-details',
  imports: [
    NgIf,
    DecimalPipe
  ],
  templateUrl: './bazaar-item-details.component.html',
  styleUrl: './bazaar-item-details.component.css'
})
export class BazaarItemDetailsComponent {
  @Input() item!: IItemModel;

  getImagePath() {
    return 'assets/item/' + this.item.image;
  }

  shouldDisplayNPCPrice(): boolean {
    if (this.item.npcBuyPrice === undefined) {
      return false;
    }
    return (this.item.pricing.sellPrice !== undefined && this.item.pricing.sellPrice < this.item.npcBuyPrice)
      || this.item.opportunity === BazaarConst.OPPORTUNITY_BUY_AND_SELL_NPC
  }

  getOpportunityCSSClass() : string{
    switch (this.item.opportunity){
      case BazaarConst.OPPORTUNITY_BETTER_CRAFT_IT :
        return 'legendary';
      case BazaarConst.OPPORTUNITY_CRAFT_AND_SELL :
      case BazaarConst.OPPORTUNITY_BUY_AND_SELL_NPC :
        return 'special';
      default :
        return '';
    }
  }

}
