import { IAccountRepository } from "../../domain/gateway/IAccountRepository";
import { IAccount } from "../../domain/entities/types";
import { IAccountModel } from "../schemas/AccountSchema";
import to from "await-to-js";
import { Account } from "../../domain/entities/Account";

interface AccountRepositoryProps {
    AccountModel: IAccountModel;
}

export class AccountRepository implements IAccountRepository {

    AccountModel: IAccountModel;

    constructor({ AccountModel }: AccountRepositoryProps) {
        this.AccountModel = AccountModel;
    }

    async create(accountProps: IAccount): Promise<Account> {
        const [err, account] = await to<IAccount>(new this.AccountModel({
            phone: accountProps.phone,
            password: accountProps.password,
            userID: accountProps.userID,
        }).save())

        if (err) throw err;

        return this.AccountModel.toAccount(account);
    }

    async delete(accountID: string): Promise<Account> {
        return this.AccountModel.toAccount(await this.AccountModel.findByIdAndRemove(accountID));
    }

    async getById(accountID: string): Promise<Account> {
        return this.AccountModel.toAccount(await this.AccountModel.findById(accountID));
    }

    async getAll(filter?: any): Promise<Account[]> {
        const accounts = await this.AccountModel.find(filter);
        return accounts.map(account => this.AccountModel.toAccount(account));
    }

    async update(accountID: string, updateProps: any): Promise<Account> {
        return this.AccountModel.toAccount(await this.AccountModel.findByIdAndUpdate(accountID, updateProps));
    }

}