import {IMessage} from "../entities/types";

export interface IMessageRepository{

    getMessages(filter?: any): Promise<IMessage[]>;

    getMessageById(messageID: string): Promise<IMessage>;

    createMessage(messageProps: IMessage): Promise<IMessage>;

    updateMessage(messageID: string, updateProps: any): Promise<IMessage>;

    deleteMessage(messageID: string): Promise<IMessage>;
}