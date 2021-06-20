import { Connection } from "mongoose";
import AccountSchema, { IAccountDocument, IAccountModel } from "../data/schemas/AccountSchema";
import ChatSchema, { IChatDocument, IChatModel } from "../data/schemas/ChatSchema";
import ContactSchema, { IContactDocument, IContactModel } from "../data/schemas/ContactSchema";
import UserSchema, { IUserDocument, IUserModel } from "../data/schemas/UserSchema";
import MessageSchema, { IMessageDocument, IMessageModel } from "../data/schemas/MessageSchema";

export default function mongoModelsConfig(connection: Connection) {
    const accountModel: IAccountModel = connection.model<IAccountDocument, IAccountModel>('Account', AccountSchema);
    const chatModel: IChatModel = connection.model<IChatDocument, IChatModel>('Chat', ChatSchema);
    const contactModel: IContactModel = connection.model<IContactDocument, IContactModel>('Contact', ContactSchema);
    const messageModel: IMessageModel = connection.model<IMessageDocument, IMessageModel>('Message', MessageSchema);
    const userModel: IUserModel = connection.model<IUserDocument, IUserModel>('User', UserSchema);


    return {
        accountModel,
        chatModel,
        contactModel,
        messageModel,
        userModel,
    }
}