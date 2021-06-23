import { IUserRepository } from "../../domain/gateway/IUserRepository";
import { IUser } from "../../domain/entities/types";
import { IUserModel } from "../schemas/UserSchema";
import to from "await-to-js";
import { User } from "../../domain/entities/User";

interface UserRepositoryProps {
    UserModel: IUserModel;
}

export class UserRepository implements IUserRepository {

    UserModel: IUserModel;

    constructor({ UserModel }: UserRepositoryProps) {
        this.UserModel = UserModel;
    }

    async create(userProps: IUser): Promise<User> {
        const [err, user] = await to<IUser>(new this.UserModel({
            firstName: userProps.firstName,
            lastName: userProps.lastName,
            userName: userProps.userName,
            email: userProps.email,
            city: userProps.city,
            avatar: userProps.avatar,
            description: userProps.description,
        }).save())

        if (err) throw err;

        return this.UserModel.toUser(user);
    }

    async delete(userID: string): Promise<User> {
        return this.UserModel.toUser(await this.UserModel.findByIdAndRemove(userID));
    }

    async getById(userID: string): Promise<User> {
        return this.UserModel.toUser(await this.UserModel.findById(userID));
    }

    async getAll(filter?: any): Promise<User[]> {
        const users = await this.UserModel.find(filter);
        return users.map(user => this.UserModel.toUser(user));
    }

    async update(userID: string, updateProps: any): Promise<User> {
        return this.UserModel.toUser(await this.UserModel.findByIdAndUpdate(userID, updateProps));
    }

}