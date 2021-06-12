import * as awilix from 'awilix';
import { Request } from 'express';
import { Connection } from "mongoose";
import mongoModelsConfig from "./ModelsConfig";
import { AccountRepository } from "../data/repository/AccountRepository";
import { CreateAccount } from "../domain/use-cases/account/CreateAccount";
import { DeleteAccount } from "../domain/use-cases/account/DeleteAccount";
import { GetAccountById } from "../domain/use-cases/account/GetAccountById";
import { UpdateAccount } from "../domain/use-cases/account/UpdateAccount";
import { GetAccounts } from "../domain/use-cases/account/GetAccounts";

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

        // Use-Cases
        createAccount: awilix.asClass(CreateAccount).singleton(),
        deleteAccount: awilix.asClass(DeleteAccount).singleton(),
        getAccountById: awilix.asClass(GetAccountById).singleton(),
        getAccounts: awilix.asClass(GetAccounts).singleton(),
        updateAccount: awilix.asClass(UpdateAccount).singleton(),

    })

    return container;
}