import {IChat} from "./types";

export class Chat {
    _id?: string;
    ownerID: string;
    name: string;
    participants: [];
    creationDate: Date;
    type: string;

    constructor({
                    _id,
                    ownerID,
                    name,
                    participants,
                    creationDate,
                    type,
                }:IChat) {
        this._id = _id;
        this.ownerID = ownerID;
        this.name = name;
        this.participants = participants;
        this.creationDate = creationDate;
        this.type = type;
    }
}