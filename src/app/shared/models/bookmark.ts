import { IHttpResponse } from './http-model';
import { Folder } from './folder';

export interface IBookmarkResponse extends IHttpResponse {
    data: Bookmark[];
}

export class Bookmark {
    _id: string;
    name: string;
    url: string;
    favourite: boolean;
    folderId: string;
    folderName: string;

    constructor(bookmark: Bookmark = {} as Bookmark) {
        this._id = bookmark._id || '';
        this.name = bookmark.name || '';
        this.url = bookmark.url || '';
        this.favourite = Boolean(bookmark.favourite);
        this.folderId = bookmark.folderId || '';
        this.folderName = bookmark.folderName || '';
    }
}

export interface IBookmarkDialogData {
    bookmark: Bookmark;
    folderList: Folder[];
}
