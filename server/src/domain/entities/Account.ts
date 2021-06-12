import {IAccount} from "./types";

export class Account {
    _id?: string;
    phone: string;
    password: string;

    constructor({_id, phone, password}: IAccount) {
        this._id = _id;
        this.phone = phone;
        this.password = password;
    }
}