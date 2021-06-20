import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from "path";
import { useExpressServer } from "routing-controllers";
import { Connection } from 'mongoose';
import makeContainer from "./AwilixContainer";
import { scopePerRequest } from "awilix-express";
import { AwilixContainer } from "awilix";
import "reflect-metadata";

export class ExpressConfig {
    app: express.Express;
    container: AwilixContainer;

    constructor(connection: Connection) {
        this.app = express();

        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.container = makeContainer(connection);
        this.app.use(scopePerRequest(this.container));

        this.setUpControllers();
    }

    setUpControllers() {
        const env = process.env.ENV;
        const controllerPath =
            env === 'PROD'
                ? path.resolve('dist', 'infrastructure', 'controllers')
                : path.resolve('src', 'infrastructure', 'controllers');

        const extension = env === 'PROD' ? '/*.js' : '/*.ts';

        useExpressServer(this.app, {
            controllers: [controllerPath + extension]
        });
    }
}