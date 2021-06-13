import { IUserAccount } from "../dto/IUserAccount";
import { GetUsers } from "../../domain/use-cases/user/GetUsers";
import { GetContacts } from "../../domain/use-cases/contact/GetContacts";
import { CreateContact } from "../../domain/use-cases/contact/CreateContact";
import {GetChats} from "../../domain/use-cases/chat/GetChats";
import {CreateChat} from "../../domain/use-cases/chat/CreateChat";

export interface IUserService {

    authenticate(token: string): Promise<IUserAccount>

    signup(props: IUserAccount): Promise<IUserAccount>;

    login(email: string, password: string): Promise<IUserAccount>;

}


export interface ContactServiceProps {
    getUsers: GetUsers;
    getContacts: GetContacts;
    createContact: CreateContact;
}

export interface AddContactProps {
    ownerID: string;
    userNickname: string;
    contactName: string;
    contactSurname: string;
}

export interface ChatServiceProps {
    getChats: GetChats;
    createChat: CreateChat;
}

export interface AddChatProps {
    ownerID: string;
    name: string;
    participants: [];
    creationDate: Date;
    type: string;
}