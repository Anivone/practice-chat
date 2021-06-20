import { Document, Model, Schema } from 'mongoose';
import { IUser } from "../../domain/entities/types";
import { User } from "../../domain/entities/User";

export interface IUserDocument extends Omit<IUser, '_id'>, Document {
}

export interface IUserModel extends IUser, Model<IUserDocument> {
    toUser(user: IUser): User;
}

const UserSchema: Schema<IUserDocument> = new Schema<IUserDocument>(
    {
        firstName: {
            type: Schema.Types.String,
            required: true,
        },
        lastName: {
            type: Schema.Types.String,
            required: true,
        },
        userName: {
            type: Schema.Types.String,
            required: true,
        },
        email: {
            type: Schema.Types.String,
            unique: true,
            required: false,
        },
        city: {
            type: Schema.Types.String,
            required: false,
        },
        avatar: {
            type: Schema.Types.String,
            required: false,
            default: "#000000",
        },
        description: {
            type: Schema.Types.String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);
UserSchema.statics.toUser = (user: IUser) => {
    return new User({
        _id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        city: user.city,
        avatar: user.avatar,
        description: user.description,
    })
};

export default UserSchema;