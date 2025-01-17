import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IItemModel} from './bazaarEntities/IItemModel';
import {IPricingRecord} from './bazaarEntities/IPricingRecord';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private readonly http: HttpClient) {
  }

  getItemList(): Observable<IItemModel[]> {
    return this.http.get<IItemModel[]>("/api/bazaar")
  }
  getItemPricingHistory(itemId: string, timeSpan? : string): Observable<IPricingRecord[]>{
    const suffix = timeSpan===undefined ? '' : `/${timeSpan}`
    return this.http.get<IPricingRecord[]>(`/api/bazaar/${itemId}${suffix}`)
  }
}
