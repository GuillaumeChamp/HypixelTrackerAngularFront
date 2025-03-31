import {IItemModel} from './IItemModel';
import {BazaarConst} from './bazaarConst';
import {ICraft} from './ICraft';

export class ItemModelUtils {

  static matchFilter(filter: string, item: IItemModel) {
    if (!filter){
      return true;
    }
    const positiveFilter: string[] = []
    const negativeFilter: string[] = []
    ItemModelUtils.parseFilterString(filter, positiveFilter, negativeFilter);
    for (const string of positiveFilter) {
      if (string.length < 2) {
        continue;
      }
      if (ItemModelUtils.isItemIdentifiersNotContainingString(item, string)) {
        return false;
      }
    }

    for (const string of negativeFilter) {
      if (string.length < 2) {
        continue;
      }
      if (ItemModelUtils.isItemIdentifierContainingString(item, string)) {
        return false;
      }
    }
    return true;
  }

  public static determineOpportunity(item: IItemModel) {
    if (!item.pricing) {
      return;
    }
    if (item.pricing.buyPrice && item.npcBuyPrice
      && item.pricing.buyPrice * BazaarConst.SELLING_TAX < item.npcBuyPrice) {
      item.tag = item.tag?.concat(BazaarConst.OPPORTUNITY);
      item.opportunity = BazaarConst.OPPORTUNITY_BUY_AND_SELL_NPC;
    }
    if (item.pricing.minimalPrice && item.pricing.buyPrice
      && item.pricing.minimalPrice < item.pricing.buyPrice) {
      item.tag = item.tag?.concat(`,${BazaarConst.OPPORTUNITY}`);
      item.opportunity = BazaarConst.OPPORTUNITY_BETTER_CRAFT_IT;
      // tax ignored here because you might want to keep the this.item
    }
    // tax are used here because you might want to sell it
    if (item.pricing.minimalPrice && item.pricing.sellPrice
      && item.pricing.minimalPrice * BazaarConst.SELLING_TAX < item.pricing.sellPrice) {
      item.tag = item.tag?.concat(`,${BazaarConst.OPPORTUNITY}`);
      item.opportunity = BazaarConst.OPPORTUNITY_CRAFT_AND_SELL
      // tax ignored here because you might want to keep the this.item
    }
  }

  /**
   * Compare two bazaar items
   * @param item1 first item
   * @param item2 second item
   * @returns {number} A number whose sign indicates the relative order of the two elements: negative if item1 is after item2, positive if item1 is before item2, and zero if they are equal.
   *  - category
   *  - tag
   *  - rarity
   *  - price (highest first)
   */
  public static compare(item1: IItemModel, item2: IItemModel): number {
    if (!item1.pricing) {
      return -1;
    }
    if (!item2.pricing) {
      return 1;
    }

    let item1CategoryIndex = BazaarConst.CATEGORY_ORDERED_LIST.indexOf(item1.category)
    let item2CategoryIndex = BazaarConst.CATEGORY_ORDERED_LIST.indexOf(item2.category)
    let compare = item1CategoryIndex - item2CategoryIndex;
    if (compare != 0 || item1.tag === undefined || item2.tag === undefined) {
      // if items belong to the same category we continue using tag
      return compare;
    }

    compare = item1.tag.localeCompare(item2?.tag);
    if (compare != 0) {
      // if items have the same category and tag we continue using rarity
      return compare;
    }
    compare = BazaarConst.TIERS_LIST.indexOf(item1.tier) - BazaarConst.TIERS_LIST.indexOf(item2.tier);
    if (compare !== 0) {
      // if items have the same category, tag and rarity we continue using price
      return compare;
    }
    return item1.pricing.buyPrice ?? 0 - (item2.pricing.buyPrice ?? 0);
  }


  public static stringifyCraft(item: IItemModel, allItems: IItemModel[]): string | undefined {
    if (!item.crafts) {
      return undefined;
    }
    let string = ``
    for (const craft of item.crafts) {
      string = string + ItemModelUtils.stringifyACraft(craft, allItems)
    }
    return string
  }

  private static parseFilterString(filter: string, positiveFilter: string[], negativeFilter: string[]) {
    const filterWords = filter.toLowerCase().split(' ')
    filterWords.forEach(str => {
      if (str.startsWith("-")) {
        negativeFilter.push(str.substring(1));
      } else {
        positiveFilter.push(str);
      }
    })
  }


  private static isItemIdentifiersNotContainingString(item: IItemModel, string: string): boolean {
    return !item.name?.toLowerCase().includes(string) &&
      (!item.tag?.toLowerCase().includes(string) &&
        (!item.category?.toLowerCase().includes(string)));
  }

  private static isItemIdentifierContainingString(item: IItemModel, string: string) {
    return item.name.toLowerCase().includes(string) ||
      (item.tag?.toLowerCase().includes(string) ||
        item.category.toLowerCase().includes(string));
  }


  private static stringifyACraft(craft: ICraft, allItems: IItemModel[]): string {
    let string = `craft : ${craft.craftingCost} = `
    let i = 0
    for (; i < craft.materials.length - 1; i++) {
      string = string + craft.quantities[i] + ' x ' + ItemModelUtils.shortItemDisplay(craft.materials[i], allItems) + ' + '
    }
    string = string + craft.quantities[i] + ' x ' + ItemModelUtils.shortItemDisplay(craft.materials[i], allItems)
    return string
  }

  private static resolveItemNameById(id: string, allItems: IItemModel[]): IItemModel | undefined {
    return allItems.find((item) => item.id === id)
  }

  private static shortItemDisplay(itemId: string, allItems: IItemModel[]) {
    const item= ItemModelUtils.resolveItemNameById(itemId, allItems)
    if(!item){
      return `item not found`
    }
    const name = item.name;
    const itemSmallPicture = ` <img src="assets/item/${item.image}" alt="material image" width="20px" height="20px"> `
    let pricing = '(cannot be bought)'
    if (item.pricing){
      const minimalPriceType = (item.pricing.minimalPrice===item.pricing.buyPrice) ? '[BUY]' : '[CRAFT]'
      pricing = `(${item.pricing.minimalPrice?.toLocaleString()}/unit) ${minimalPriceType}`
    }
    return name + itemSmallPicture + pricing
  }

}
