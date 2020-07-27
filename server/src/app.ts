import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import cors from 'cors';
import ConnectDB from './db';
import { ApiController } from './api';

class Server {
    public app: Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        // create expressjs application
        this.app = express();

        // configure application
        this.configureApp();
    }

    private configureApp() {
        // Cross-origin config
        this.app.use(cors({
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200
        }))

        // Parsers for POST data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Point static path to dist
        this.app.use(express.static(join(__dirname, 'public')));

        /**
         * Get port from environment and store in Express.
         */
        const port = process.env.PORT || '3000';
        this.app.set('port', port);
        const db = 'mongodb://localhost:27017/bookmarks-app';

        ConnectDB(db);
        ApiController.init(this.app);
        /**
         * Listen on provided port, on all network interfaces.
         */
        this.app.listen(port, () => console.log(`API running on localhost:${port}`));

    }
}

Server.bootstrap();
