import { IMessageRepository } from "../../domain/gateway/IMessageRepository";
import { IMessage } from "../../domain/entities/types";
import { IMessageModel } from "../schemas/MessageSchema";
import to from "await-to-js";
import { Message } from "../../domain/entities/Message";

interface MessageRepositoryProps {
    MessageModel: IMessageModel;
}

export class MessageRepository implements IMessageRepository {

    MessageModel: IMessageModel;

    constructor({ MessageModel }: MessageRepositoryProps) {
        this.MessageModel = MessageModel;
    }

    async create(messageProps: IMessage): Promise<Message> {
        const [err, message] = await to<IMessage>(new this.MessageModel({
            userID: messageProps.userID,
            chatID: messageProps.chatID,
            content: messageProps.content,
            dateTime: messageProps.dateTime,
            edited: messageProps.edited,
        }).save())

        if (err) throw err;

        return this.MessageModel.toMessage(message);
    }

    async delete(messageID: string): Promise<Message> {
        return this.MessageModel.toMessage(await this.MessageModel.findByIdAndRemove(messageID));
    }

    async getById(messageID: string): Promise<Message> {
        return this.MessageModel.toMessage(await this.MessageModel.findById(messageID));
    }

    async getAll(filter?: any): Promise<Message[]> {
        const messages = await this.MessageModel.find(filter);
        return messages.map(message => this.MessageModel.toMessage(message));
    }

    async update(messageID: string, updateProps: any): Promise<Message> {
        return this.MessageModel.toMessage(await this.MessageModel.findByIdAndUpdate(messageID, updateProps));
    }

}