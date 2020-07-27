import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookmarkResponse } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(
    private http: HttpClient
  ) { }

  getFavouriteBookmarks() {
    return this.http.get<IBookmarkResponse>(environment.baseUrl + 'api/bookmark?favourite=true');
  }
}
