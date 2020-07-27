import { Router } from 'express';
import { BookmarkController } from './bookmark.controller';

export class BookmarkApi {
    constructor() {
        this.configureRoutes();
    }

    configureRoutes() {
        const router: Router = Router();
        const bookmark: BookmarkController = new BookmarkController();

        router.get('/', bookmark.getBookmarks);
        router.get('/:id', bookmark.getBookmark);
        router.post('/', bookmark.updateFolders, bookmark.createBookmark);
        router.put('/:id', bookmark.updateFolders, bookmark.updateBookmark);
        router.delete('/:id', bookmark.deleteBookmark);

        return router;
    }
}