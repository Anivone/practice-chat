import * as dotenv from 'dotenv';
import * as path from "path";
import { Application } from "./config/Application";

dotenv.config({path: path.resolve(__dirname, '../../.env')});

Application.init().then(() => {
    console.log('Application initialized !');
});
