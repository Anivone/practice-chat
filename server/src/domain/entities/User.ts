import {IUser} from "./types";

export class User {
    _id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    city?: string;
    avatar: string;
    description?: string;


    constructor({
                    _id,
                    firstName,
                    lastName,
                    userName,
                    email,
                    city,
                    avatar,
                    description,
                }: IUser){

        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.city = city;
        this.avatar = avatar;
        this.description = description;
    }
}
