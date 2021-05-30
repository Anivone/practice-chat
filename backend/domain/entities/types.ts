export interface IAccount {
    _id?: string;
    phone: string;
    password: string;
}

export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    city?: string;
    avatar: string;
    description?: string;
    accountID: string;
}

export interface IContact {
    _id?: string;
    ownerID: string;
    userID: string;
    contactName: string;
    contactSurname: string;
}

export interface IMessage {
    _id?: string;
    userID: string;
    chatID: string;
    content: string;
    dateTime: Date;
    edited?: string;
}

export interface IChat {
    _id?: string;
    ownerID: string;
    name: string;
    participants: [];
    creationDate: Date;
    type: string;
}

