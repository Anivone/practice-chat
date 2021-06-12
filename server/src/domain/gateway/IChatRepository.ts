import {IChat} from "../entities/types";

export interface IChatRepository {

    getChats(filter?: any): Promise<IChat[]>;

    getChatById(chatID: string): Promise<IChat>;

    createChat(chatProps: IChat): Promise<IChat>;

    updateChat(chatID: string, updateProps: any): Promise<IChat>;

    deleteChat(chatID: string): Promise<IChat>;
}
