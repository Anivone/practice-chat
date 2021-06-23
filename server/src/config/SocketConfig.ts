import { Server } from "http";
import * as io from 'socket.io';
import { Message } from "../domain/entities/Message";
import { AwilixContainer } from "awilix";
import { CreateMessage } from "../domain/use-cases/message/CreateMessage";
import { IMessage } from "../domain/entities/types";

export class SocketConfig {

    private container: AwilixContainer;
    io: io.Server;

    constructor(http: Server, container: AwilixContainer) {
        this.container = container;
        this.io = require('socket.io')(http, {
            cors: {
                origin: '*'
            }
        });

        this.configureSocket(this.io);
    }

    configureSocket(io: io.Server) {
        const { createMessage }: { createMessage: CreateMessage } = this.container.cradle;
        io.on('connection', (socket: io.Socket) => {
            console.log('User connected');

            socket.on('message', (msg: any) => {
                console.log('[x] Message received: ', msg);

                createMessage.execute({
                    userID: msg.userID,
                    chatID: msg.chatID,
                    content: msg.content,
                    dateTime: msg.dateTime
                }).then((message: IMessage) => {
                   socket.emit('response', message);
                });
            });
        });
    }
}
