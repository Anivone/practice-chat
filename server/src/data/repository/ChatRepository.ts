import { IChatRepository } from "../../domain/gateway/IChatRepository";
import { IChat } from "../../domain/entities/types";
import { IChatModel } from "../schemas/ChatSchema";
import to from "await-to-js";
import { Chat } from "../../domain/entities/Chat";

interface ChatRepositoryProps {
    ChatModel: IChatModel;
}

export class ChatRepository implements IChatRepository {

    ChatModel: IChatModel;

    constructor({ ChatModel }: ChatRepositoryProps) {
        this.ChatModel = ChatModel;
    }

    async create(chatProps: IChat): Promise<Chat> {
        const [err, chat] = await to<IChat>(new this.ChatModel({
            ownerID: chatProps.ownerID,
            name: chatProps.name,
            participants: chatProps.participants,
            creationDate: chatProps.creationDate,
            type: chatProps.type,
        }).save())

        if (err) throw err;

        return this.ChatModel.toChat(chat);
    }

    async delete(chatID: string): Promise<Chat> {
        return this.ChatModel.toChat(await this.ChatModel.findByIdAndRemove(chatID));
    }

    async getById(chatID: string): Promise<Chat> {
        return this.ChatModel.toChat(await this.ChatModel.findById(chatID));
    }

    async getAll(filter?: any): Promise<Chat[]> {
        const chats = await this.ChatModel.find(filter);
        return chats.map(chat => this.ChatModel.toChat(chat));
    }

    async update(chatID: string, updateProps: any): Promise<Chat> {
        return this.ChatModel.toChat(await this.ChatModel.findByIdAndUpdate(chatID, updateProps));
    }

}