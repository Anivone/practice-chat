import * as amqp from 'amqplib';
import to from "await-to-js";

export enum Queues {
    INCOMING = 'incoming',
    OUTGOING = 'outgoing',
}

export type ExchangeType = 'topic' | 'direct' | 'fanout';

export class RabbitHandler {

    static instance: RabbitHandler;

    private connection: amqp.Connection;
    channel: amqp.Channel;

    private constructor(connection: amqp.Connection, channel: amqp.Channel) {
        this.connection = connection;
        this.channel = channel;
    }

    static async init() {
        if (this.instance) return this.instance;

        const [err, connection] = await to(amqp.connect(process.env.RABBIT_CONNECTION_URL));
        if (err) throw err;

        const [err2, channel] = await to(connection.createChannel());
        if (err2) throw err2;

        this.instance = new RabbitHandler(connection, channel);
        return this.instance;
    }

    async assertExchange(exchange: string, type: ExchangeType, durable: boolean = false) {
        const [err, ex] = await to(this.channel.assertExchange(exchange, type, {
            durable
        }));
        if (err) throw err;

        return ex;
    }

    bindQueue(queue: string, exchange: string, key: string) {
        return this.channel.bindQueue(queue, exchange, key);
    }

    publish(exchange: string, key: string, message: string) {
        this.channel.publish(exchange, key, Buffer.from(message));
    }

    async consume(queue: string, noAck: boolean = true) {
        let message = '';
        await this.channel.consume(queue, (msg) => {
            message = msg.content.toString();
        }, { noAck });

        return message;
    }
}