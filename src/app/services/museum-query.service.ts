import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMuseumItem} from '../museum/museum-entities/IMuseumItem';
import {customConfig} from '../app.config';
import {IMinecraftUser} from '../museum/museum-entities/IMinecraftUser';

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

  getUserDataFromUsername(username : string): Observable<IMinecraftUser> {
    return this.http.get<IMinecraftUser>(this.pathToApi+"/uuid/"+username)
  }
}
