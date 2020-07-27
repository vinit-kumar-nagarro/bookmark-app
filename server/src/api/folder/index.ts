import { Router } from 'express';
import { FolderController } from './folder.controller';

export class FolderApi {
    constructor() {
        this.configureRoutes();
    }

    configureRoutes() {
        const router: Router = Router();
        const bookmark: FolderController = new FolderController();

        router.get('/', bookmark.getFolders);
        router.post('/', bookmark.createFolder);

        return router;
    }
}