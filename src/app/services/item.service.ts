import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IItemModel} from '../bazaar/bazaarEntities/IItemModel';
import {IPricingRecord} from '../bazaar/bazaarEntities/IPricingRecord';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  pathToApi = "http://srv664396.hstgr.cloud:3030"

  constructor(private readonly http: HttpClient) {
  }

  getItemList(): Observable<IItemModel[]> {
    return this.http.get<IItemModel[]>(this.pathToApi+"/bazaar")
  }
  getItemPricingHistory(itemId: string, timeSpan? : string): Observable<IPricingRecord[]>{
    const suffix = timeSpan===undefined ? '' : `/${timeSpan}`
    return this.http.get<IPricingRecord[]>(this.pathToApi+`/bazaar/${itemId}${suffix}`)
  }
}
