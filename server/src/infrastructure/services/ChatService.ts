import { IChat, IContact, IMessage, IUser } from "../../domain/entities/types";
import to from "await-to-js";
import { AddContactProps, ChatServiceProps, ContactServiceProps } from "./types";
import { GetMessages } from "../../domain/use-cases/message/GetMessages";
import { GetChats } from "../../domain/use-cases/chat/GetChats";

export class ChatService {
    private getChats: GetChats;
    private getMessages: GetMessages;

    constructor({ getChats, getMessages }: ChatServiceProps) {
        this.getChats = getChats;
        this.getMessages = getMessages;
    }

    async getChatsWithMessages(userID: string) {
        const [err, chats] = await to<IChat[]>(this.getChats.execute({ownerID: userID}));
        if (err) throw err;

        const chatIds = chats.map(chat => chat.ownerID);
        const [err1, messages] = await to<IMessage[]>(this.getMessages.execute({
            chatID: {
                $in: chatIds
            }
        }));

        if (err1) throw err1;

        return {
            chats: chats.map(chat => {
                const chatMessages = messages.find(msg => msg.chatID === chat._id);
                return {
                    chat,
                    messages: chatMessages
                }
            })
        };
    }

}