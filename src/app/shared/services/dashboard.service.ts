import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBookmarkResponse, IFolderResponse, Bookmark } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getBookmarksByFolderId(folderId: string) {
    return this.http.get<IBookmarkResponse>(environment.baseUrl + `api/bookmark?folderId=${folderId}`);
  }

  getFolders() {
    return this.http.get<IFolderResponse>(environment.baseUrl + 'api/folder');
  }

  createBookmark(bookmark: Bookmark) {
    return this.http.post<IBookmarkResponse>(environment.baseUrl + 'api/bookmark', bookmark);
  }

  updateBookmark(bookmark: Bookmark) {
    return this.http.put<IBookmarkResponse>(environment.baseUrl + `api/bookmark/${bookmark._id}`, bookmark);
  }

  deleteBookmark(id: string) {
    return this.http.delete<IBookmarkResponse>(environment.baseUrl + `api/bookmark/${id})`);
  }
}
