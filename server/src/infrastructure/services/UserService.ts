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

    async createUsers(user: IUser) {
        let err;
        [err] = await to<any>(axios.post(
            `http://localhost:${process.env.SERVER_PORT}/users`, {
                ...user,
                userID: user._id,
            })
        );
        if (err) throw err;
    }

    async deleteUsers(userID: string) {
        let err, response;
        [err, response] = await to<any>(axios.delete(
            `http://localhost:${process.env.SERVER_PORT}/users/${userID}`)
        );
        if (err) throw err;
        console.log('[X] deleteUsers data: ', response.data);
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
        const [err2, user] = await to<IUser>(this.getUserById.execute(account._id));

        if (err2) throw err2;

        return new UserAccount({
            ...user,
            phone: account.phone,
            accountID: user._id,
        });
    }

    async login(phone: string, password: string): Promise<UserAccount> {
        const [err, accountList] = await to<IAccount[]>(this.getAccounts.execute({ phone: phone }));
        if (err) throw err;

        if (!accountList[0]) throw ('User does not exist');

        const account = accountList[0];

        if (!await this.isValidPassword(password, account)) throw ('Password is not correct');

        const [err2, user] = await to<IUser>(this.getUserById.execute(account._id));

        if (err2) throw err2;

        return new UserAccount({
            ...user,
            phone: account.phone,
            accountID: user._id,
        })

    }

    async signup(props: UserAccount): Promise<UserAccount> {
        const [err, user] = await to<IUser>(
            this.createUser.execute(props)
        );
        if (err) throw err;

        const [err2, account] = await to<IAccount>(
            this.createAccount.execute({
                phone: props.phone,
                password: props.password,
                _id: user._id
            }));
        if (err2) throw err2;

        await this.createUsers(user);

        return new UserAccount({
            ...user,
            phone: account.phone,
            accountID: user._id,
        });
    }

    async delete(userID: string) {
        const [err, user] = await to<IUser>(this.deleteUser.execute(userID));
        if (err) throw err;

        await this.deleteUsers(userID);

        return user;
    }

    async isValidPassword(password: string, account: IAccount) {
        return await bcrypt.compare(password, account.password);
    }
}