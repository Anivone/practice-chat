import * as jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";
import to from "await-to-js";
import { IUserService } from "./types";
import { CreateAccount } from "../../domain/use-cases/account/CreateAccount";
import { CreateUser } from "../../domain/use-cases/user/CreateUser";
import { IAccount, IUser, } from "../../domain/entities/types";
import { GetAccounts } from "../../domain/use-cases/account/GetAccounts";
import { GetUserById } from "../../domain/use-cases/user/GetUserById";
import { UserAccount } from "../dto/IUserAccount";
import { DeleteUser } from "../../domain/use-cases/user/DeleteUser";
import { DeleteAccountByUserId } from "../../domain/use-cases/account/DeleteAccountByUserId";
import axios from "axios";

interface UserServiceProps {
    createAccount: CreateAccount;
    createUser: CreateUser;
    getUserById: GetUserById;
    getAccounts: GetAccounts;
    deleteUser: DeleteUser;
    deleteAccountByUserId: DeleteAccountByUserId;
}

export class UserService implements IUserService {

    private createAccount: CreateAccount;
    private createUser: CreateUser;
    private getUserById: GetUserById;
    private getAccounts: GetAccounts;
    private deleteUser: DeleteUser;
    private deleteAccountByUserId: DeleteAccountByUserId;

    constructor({
                    createAccount,
                    createUser,
                    getUserById,
                    getAccounts,
                    deleteAccountByUserId,
                    deleteUser,
                }: UserServiceProps) {
        this.createAccount = createAccount;
        this.createUser = createUser;
        this.getUserById = getUserById;
        this.getAccounts = getAccounts;
        this.deleteAccountByUserId = deleteAccountByUserId;
        this.deleteUser = deleteUser;
    }

    async authenticate(token: string): Promise<UserAccount> {
        const jwtPayload: any = jwt.verify(token, process.env.JWT_SECRET);

        let data;
        if (typeof jwtPayload == 'object') {
            data = jwtPayload.data;
        } else {
            throw ('JwtToken has no payload');
        }

        const [err, accountList] = await to<IAccount[]>(this.getAccounts.execute({ phone: data.phone }));
        if (err) throw err;

        if (!accountList[0]) throw ('User does not exist');

        const account = accountList[0];
        const [err2, user] = await to<IUser>(this.getUserById.execute(account.userID));

        if (err2) throw err2;

        return new UserAccount({
            ...user,
            phone: account.phone,
            userID: user._id,
        });
    }

    async login(phone: string, password: string): Promise<UserAccount> {
        const [err, accountList] = await to<IAccount[]>(this.getAccounts.execute({ phone: phone }));
        if (err) throw err;

        if (!accountList[0]) throw new Error('User does not exist');

        const account = accountList[0];

        if (!await this.isValidPassword(password, account)) throw new Error('Password is not correct');

        const [err2, user] = await to<IUser>(this.getUserById.execute(account.userID));

        if (err2) throw err2;

        return new UserAccount({
            ...user,
            phone: account.phone,
            userID: user._id,
        })

    }

    async signup(props: Omit<UserAccount, 'userID'>): Promise<UserAccount> {
        const [err3, accounts] = await to<IAccount[]>(this.getAccounts.execute({phone: props.phone}));
        if (err3) throw err3;
        if (accounts.length > 0) throw new Error('Account with such phone already exists');

        const [err, user] = await to<IUser>(
            this.createUser.execute(props)
        );
        if (err) throw err;

        const [err2, account] = await to<IAccount>(
            this.createAccount.execute({
                phone: props.phone,
                password: props.password,
                userID: user._id
            }));
        if (err2) throw err2;

        return new UserAccount({
            ...user,
            phone: account.phone,
            userID: user._id,
        });
    }

    async isValidPassword(password: string, account: IAccount) {
        return await bcrypt.compare(password, account.password);
    }
}