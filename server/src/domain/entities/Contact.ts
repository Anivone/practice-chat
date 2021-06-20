import {IContact} from "./types";

export class Contact {
    _id?: string;
    ownerID: string;
    userID: string;
    contactName: string;
    contactSurname: string;

    constructor({_id, ownerID, userID, contactName, contactSurname}:IContact) {
        this._id = _id;
        this.ownerID = ownerID;
        this.userID = userID;
        this.contactName = contactName;
        this.contactSurname = contactSurname;
    }
}