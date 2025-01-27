import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMuseumItem} from '../museum/museum-entities/IMuseumItem';
import {customConfig} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MuseumQueryService {
  pathToApi = customConfig.apiPath

  constructor(private readonly http: HttpClient) {
  }

  getAllMuseumItem(): Observable<IMuseumItem[]> {
    return this.http.get<IMuseumItem[]>(this.pathToApi+"/museum")
  }
}
