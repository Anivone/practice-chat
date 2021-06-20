import {IMessage} from "./types";

export class Message {
    _id?: string;
    userID: string;
    chatID: string;
    content: string;
    dateTime: Date;
    edited?: string;

    constructor({
                    _id,
                    userID,
                    chatID,
                    content,
                    dateTime,
                    edited,
                }:IMessage) {

        this._id = _id;
        this.userID = userID;
        this.chatID = chatID;
        this.content = content;
        this.dateTime = dateTime;
        this.edited = edited;
    }
}