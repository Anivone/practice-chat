import { Server } from "http";
import * as io from 'socket.io';
import { Message } from "../domain/entities/Message";

export class SocketConfig {

    io: io.Server;

    constructor(http: Server) {
        this.io = require('socket.io')(http, {
            cors: {
                origin: '*'
            }
        });

        this.configureSocket(this.io);
    }

    configureSocket(io: io.Server) {
        io.on('connection', (socket: any) => {
            console.log('User connected');

            socket.on('message', (message: Message) => {
                console.log('[x] Message received: ', message);
            });

        });
    }

}
