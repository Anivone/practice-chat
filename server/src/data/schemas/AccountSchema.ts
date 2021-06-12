import { Document, Model, Schema } from 'mongoose';
import { IAccount } from "../../domain/entities/types";
import { Account } from "../../domain/entities/Account";

const bcrypt = require("bcryptjs");

export interface IAccountDocument extends Omit<IAccount, '_id'>, Document {
}

export interface IAccountModel extends IAccount, Model<IAccountDocument> {
    toAccount(account: IAccount): Account;
}

const AccountSchema: Schema<IAccountDocument> = new Schema<IAccountDocument>(
    {
        phone: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        password: {
            type: Schema.Types.String,
            required: true,
        },
        userID: {
            type: Schema.Types.String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

AccountSchema.statics.toAccount = (account: IAccount) => {
    return new Account({
        _id: account._id.toString(),
        phone: account.phone,
        password: account.password,
    })
};

AccountSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


AccountSchema.pre<IAccountDocument>(
    'save',
    async function (next) {
        const user = this;
        user.password = await bcrypt.hash(user.password, 10);
        next();
    });

export default AccountSchema;