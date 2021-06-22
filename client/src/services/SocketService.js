import { io } from 'socket.io-client';

export class SocketService {

    constructor() {
        this.socket = io('http://localhost:5000');
    }

    configureSocket(socket) {
        socket.on('connection', () => {
            console.log('User connected !');
        });
    }

    sendMessage(message) {
        this.socket.emit('message', message);
    }

}