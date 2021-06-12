import { Document, Model, Schema } from "mongoose";
import {IChat} from "../../domain/entities/types";
import {Chat} from "../../domain/entities/chat";

export interface IChatDocument extends Omit<IChat, '_id'>, Document {
}

export interface IChatModel extends IChat, Model<IChatDocument> {
    toChat(chat: IChat): Chat;
}

const ChatSchema: Schema<IChatDocument> = new Schema<IChatDocument>(
    {
        ownerID: {
            type: Schema.Types.String,
            required: true,
        },
        name: {
            type: Schema.Types.String,
            required: true,
        },
        participants: {
            type: Schema.Types.Array,
            required: true,
        },
        creationDate: {
            type: Schema.Types.Date,
            required: true,
        },
        type: {
            type: Schema.Types.String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

ChatSchema.statics.toChat = (chat: IChat) => {
    return new Chat({
        _id: chat._id.toString(),
        ownerID: chat.ownerID,
        creationDate: chat.creationDate,
        name: chat.name,
        participants: chat.participants,
        type: chat.type
    })
};

export default ChatSchema;