
import Bookmark, { IBookmark } from './bookmark.model';
import Folder from '../folder/folder.model';
import { Request, Response, NextFunction } from 'express';
import { successHandler, errorHandler } from '../../shared/handlers';
import { Error } from 'mongoose';

export class BookmarkController {
    public getBookmarks(req: Request, res: Response) {
        let query = {};

        if (req.query) {
            query = { ...req.query };
        }
        Bookmark.find(query, (err: Error, data) => {
            if (err) {
                return errorHandler(res, err.message);
            }
            successHandler(res, data);
        })
    }

    public getBookmark(req: Request, res: Response) {
        Bookmark.findById(req.params.id, (err: Error, data) => {
            if (err) {
                return errorHandler(res, err.message);
            }
            successHandler(res, data);
        })
    }

    public createBookmark(req: Request, res: Response) {
        const newBookmark = new Bookmark({
            name: req.body.name,
            url: req.body.url,
            favourite: req.body.favourite,
            folderId: req.body.folderId
        });
        newBookmark.save((err: Error, bookmark) => {
            if (err) {
                return errorHandler(res, err.message);
            }
            successHandler(res, bookmark);
        })
    }

    public updateFolders(req: Request, res: Response, next: NextFunction) {
        if (!req.body.folderId && !req.body.folderName) {
            req.body.folderName = 'Default';
        }
        if (!req.body.folderId) {

            Folder.findOne({ name: req.body.folderName }, (err: Error, folder) => {
                if (err) {
                    return errorHandler(res, err.message);
                }
                else if (folder) {
                    req.body.folderId = folder._id;
                    next();
                }
                else {
                    const newFolder = new Folder({ name: req.body.folderName });
                    newFolder.save((newErr: Error, result) => {
                        if (newErr) {
                            return errorHandler(res, newErr.message);
                        }
                        req.body.folderId = result._id;
                        next();
                    })
                }
            })
        }
        else {
            next();
        }
    }

    public updateBookmark(req: Request, res: Response) {
        Bookmark.findById(req.params.id, (err: Error, bookmark) => {
            if (err) {
                return errorHandler(res, err.message);
            }

            const newBookmark = Object.assign<IBookmark, IBookmark>(bookmark, req.body);
            newBookmark.save((saveErr: Error) => {
                if (saveErr) {
                    return errorHandler(res, saveErr.message);
                }
                successHandler(res);
            });
        })
    }

    public deleteBookmark(req: Request, res: Response) {
        Bookmark.deleteOne({ _id: req.params.id }, (err: Error) => {
            if (err) {
                return errorHandler(res, err.message);
            }
            successHandler(res);
        })
    }
}