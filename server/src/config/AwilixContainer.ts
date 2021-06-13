import * as awilix from 'awilix';
import { Request } from 'express';
import { Connection } from "mongoose";
import mongoModelsConfig from "./ModelsConfig";

import { ChatRepository } from "../data/repository/ChatRepository";
import { ContactRepository } from "../data/repository/ContactRepository";
import { AccountRepository } from "../data/repository/AccountRepository";

import { CreateChat } from "../domain/use-cases/chat/CreateChat";
import { DeleteChat } from "../domain/use-cases/chat/DeleteChat";
import { GetChatById } from "../domain/use-cases/chat/GetChatById";
import { GetChats } from "../domain/use-cases/chat/GetChats";
import { UpdateChat } from "../domain/use-cases/chat/UpdateChat";

import { CreateAccount } from "../domain/use-cases/account/CreateAccount";
import { DeleteAccount } from "../domain/use-cases/account/DeleteAccount";
import { GetAccountById } from "../domain/use-cases/account/GetAccountById";
import { UpdateAccount } from "../domain/use-cases/account/UpdateAccount";
import { GetAccounts } from "../domain/use-cases/account/GetAccounts";
import { DeleteAccountByUserId } from "../domain/use-cases/account/DeleteAccountByUserId";

import { DeleteContact } from "../domain/use-cases/contact/DeleteContact";
import { GetContactById } from "../domain/use-cases/contact/GetContactById";
import { GetContacts } from "../domain/use-cases/contact/GetContacts";
import { CreateContact } from "../domain/use-cases/contact/CreateContact";
import { UpdateContact } from "../domain/use-cases/contact/UpdateContact";

import { UserService } from "../infrastructure/services/UserService";
import { ContactService } from "../infrastructure/services/ContactService";
import { CreateUser } from "../domain/use-cases/user/CreateUser";
import { DeleteUser } from "../domain/use-cases/user/DeleteUser";
import { GetUserById } from "../domain/use-cases/user/GetUserById";
import { UpdateUser } from "../domain/use-cases/user/UpdateUser";
import { GetUsers } from "../domain/use-cases/user/GetUsers";
import { UserRepository } from "../data/repository/UserRepository";
import {ChatService} from "../infrastructure/services/ChatServices";

export interface ContainerReq extends Request {
    container: awilix.AwilixContainer;
}

export default function makeContainer(connection: Connection) {
    const container = awilix.createContainer();
    const { accountModel, chatModel, contactModel, messageModel, userModel } = mongoModelsConfig(connection);

    container.register({

        // Values
        mongoConnection: awilix.asValue(connection),

        // Models
        AccountModel: awilix.asValue(accountModel),
        ChatModel: awilix.asValue(chatModel),
        ContactModel: awilix.asValue(contactModel),
        MessageModel: awilix.asValue(messageModel),
        UserModel: awilix.asValue(userModel),

        // Repositories
        accountRepository: awilix.asClass(AccountRepository).singleton(),
        userRepository: awilix.asClass(UserRepository).singleton(),
        contactRepository: awilix.asClass(ContactRepository).singleton(),
        chatRepository: awilix.asClass(ChatRepository).singleton(),

        // Services
        userService: awilix.asClass(UserService).singleton(),
        contactService: awilix.asClass(ContactService).singleton(),
        chatService: awilix.asClass(ChatService).singleton(),

        // Use-Cases
        createAccount: awilix.asClass(CreateAccount).singleton(),
        deleteAccount: awilix.asClass(DeleteAccount).singleton(),
        deleteAccountByUserId: awilix.asClass(DeleteAccountByUserId).singleton(),
        getAccountById: awilix.asClass(GetAccountById).singleton(),
        getAccounts: awilix.asClass(GetAccounts).singleton(),
        updateAccount: awilix.asClass(UpdateAccount).singleton(),

        createUser: awilix.asClass(CreateUser).singleton(),
        deleteUser: awilix.asClass(DeleteUser).singleton(),
        getUserById: awilix.asClass(GetUserById).singleton(),
        getUsers: awilix.asClass(GetUsers).singleton(),
        updateUser: awilix.asClass(UpdateUser).singleton(),

        createContact: awilix.asClass(CreateContact).singleton(),
        deleteContact: awilix.asClass(DeleteContact).singleton(),
        getContactById: awilix.asClass(GetContactById).singleton(),
        getContacts: awilix.asClass(GetContacts).singleton(),
        updateContact: awilix.asClass(UpdateContact).singleton(),

        createChat: awilix.asClass(CreateChat).singleton(),
        deleteChat: awilix.asClass(DeleteChat).singleton(),
        getChatById: awilix.asClass(GetChatById).singleton(),
        getChats: awilix.asClass(GetChats).singleton(),
        updateChat: awilix.asClass(UpdateChat).singleton(),

    });

    return container;
}