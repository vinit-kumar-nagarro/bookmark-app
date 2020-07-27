
import Folders, { IFolder } from './folder.model';
import { Request, Response } from "express";
import { successHandler, errorHandler } from '../../shared/handlers';
import { Error } from 'mongoose';

export class FolderController {
    public getFolders(req: Request, res: Response) {
        Folders.find({}, (err:Error, data) => {
            if (err) {
                return errorHandler(res, err.message);
            }
            successHandler(res, data);
        })
    }

    public createFolder(req: Request, res: Response) {
        Folders.create({
            name: req.body.folderName
        })
            .then((data: IFolder) => {
                successHandler(res, data);
            })
            .catch((e: Error) => {
                errorHandler(res, e.message);
            })
    }
}