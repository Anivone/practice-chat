import { Connection } from 'mongoose';
import { ExpressConfig } from "./ExpressConfig";
import to from "await-to-js";
import * as mongoose from "mongoose";

export class Application {
    private server: any;
    private express: ExpressConfig;

    public static instance: Application;

    private constructor(connection: Connection) {
        this.express = new ExpressConfig(connection);
        const port = process.env.SERVER_PORT;
        this.server = this.express.app.listen(port,
            () => console.log(`Server started ! Express: http://localhost:${port}`));
    }

    static async init() {
        if (this.instance) return this.instance;

        const [err, connection] = await to(mongoose.createConnection(
            `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.DB_NAME}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
                serverSelectionTimeoutMS: 5000
            }));
        if (err) throw err;

        this.instance = new Application(connection);
        return this.instance;
    }
}