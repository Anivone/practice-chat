import to from "await-to-js";
import * as mongoose from "mongoose";

export async function makeTestConnection() {
    const [err, connection] = await to(mongoose.createConnection(
        `mongodb://localhost:27017/practice-chat-test`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000
        }));
    if (err) throw err;

    return connection
}