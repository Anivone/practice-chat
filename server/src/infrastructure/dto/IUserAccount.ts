import { IAccount, IUser } from "../../domain/entities/types";

export interface IUserAccount extends Omit<IUser, '_id'>, Omit<Omit<IAccount, '_id'>, 'password'> {
    password?: string;
}

export class UserAccount {
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    city?: string
    avatar: string;
    description?: string;
    accountID: string;
    phone: string;
    password?: string;


    constructor(props: IUserAccount) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.userName = props.userName;
        this.phone = props.phone;
        this.city = props.city;
        this.description = props.description;
        this.avatar = props.avatar;
        this.email = props.email;
        this.password = props.password;
        this.accountID = props.accountID;
    }
}