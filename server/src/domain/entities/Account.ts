import { IAccount } from "./types";

export class Account {
    _id?: string;
    phone: string;
    password: string;
    userID: string;

    constructor({ _id, phone, password, userID }: IAccount) {
        this._id = _id;
        this.phone = phone;
        this.password = password;
        this.userID = userID;
    }
}