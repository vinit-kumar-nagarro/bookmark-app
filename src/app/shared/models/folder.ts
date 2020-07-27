import { IHttpResponse } from './http-model';

export interface IFolderResponse extends IHttpResponse {
    data: Folder[];
}

export class Folder {
    _id: string;
    name: string;
    [extendedProp: string]: any;

    constructor(folder: Folder = {} as Folder) {
        this._id = folder._id || '';
        this.name = folder.name || '';
    }
}
