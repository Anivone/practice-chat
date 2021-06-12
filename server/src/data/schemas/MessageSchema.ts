import { Document, Model, Schema } from "mongoose";
import {IMessage} from "../../domain/entities/types";
import { Message } from "../../domain/entities/Message";

export interface IMessageDocument extends Omit<IMessage, '_id'>, Document {
}

export interface IMessageModel extends IMessage, Model<IMessageDocument> {
    toMessage(message: IMessage): Message;
}

const MessageSchema: Schema<IMessageDocument> = new Schema<IMessageDocument>({
    userID: {
        type: Schema.Types.String,
        required: true,
    },
    chatID: {
        type: Schema.Types.String,
        required: true,
    },
    content: {
        type: Schema.Types.String,
        required: true,
    },
    dateTime: {
        type: Schema.Types.Date,
        required: true,
    },
    edited: {
        type: Schema.Types.String,
        required: false,
    }

});

MessageSchema.statics.toMessage = (message: IMessage) => {
    return new Message({
        _id: message._id.toString(),
        userID: message.userID,
        chatID: message.chatID,
        content: message.content,
        dateTime: message.dateTime,
        edited: message.edited
    })
};

export default MessageSchema;