import { Application } from 'express';
import { join } from 'path';
import { FolderApi } from './folder';
import { BookmarkApi } from './bookmark';

export class ApiController {
    app: Application;

    static init(app: Application) {
        return new ApiController(app);
    }

    constructor(app: Application) {
        this.app = app;
        this.configureRoutes();
    }

    configureRoutes() {
        const folderApi = new FolderApi();
        const bookmarkApi = new BookmarkApi();

        this.app.use('/api/folder', folderApi.configureRoutes());
        this.app.use('/api/bookmark', bookmarkApi.configureRoutes());

        this.app.route('/*')
            .get((req, res) => {
                // res.send('TS App is Running');
                res.sendFile(join(__dirname, '../public/index.html'));
            });
    }
}