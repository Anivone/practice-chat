import { GetChats } from "../../domain/use-cases/chat/GetChats";
import { IChat } from "../../domain/entities/types";
import to from "await-to-js";
import { CreateChat } from "../../domain/use-cases/chat/CreateChat";
import { AddChatProps, ChatServiceProps } from "./types";

export class ChatService {
    private getChats: GetChats;
    private createChat: CreateChat;

    constructor({getChats, createChat }: ChatServiceProps) {
        this.getChats = getChats;
        this.createChat = createChat;
    }

    async addChat(props: AddChatProps): Promise<IChat> {
        const [err1, chats] = await to<IChat[]>(this.getChats.execute({ name: props.name }));
        if (err1) throw err1;
        if (chats[0]) throw new Error('Chat with such name already exists');

        const [err2, chat] = await to<IChat>(this.createChat.execute({
            ownerID: props.ownerID,
            name: props.name,
            participants: props.participants,
            creationDate: props.creationDate,
            type: props.type,
        }));
        if (err2) throw err2;

        return chat;
    }

}