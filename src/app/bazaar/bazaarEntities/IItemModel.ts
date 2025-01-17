import {IPricing} from './IPricing';
import {ICraft} from './ICraft';

export interface IItemModel {
  id: string;
  name: string;
  category: string;
  tier: string;
  tag: string;
  image: string;
  pricing: IPricing;
  crafts : ICraft[];
  npcBuyPrice?: number;
  options?: string;
  opportunity?: string;
}
