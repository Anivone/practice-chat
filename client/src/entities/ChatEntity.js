export class ChatEntity {
    constructor({
                    _id,
                    ownerID,
                    name,
                    participants,
                    creationDate,
                    type,
                }) {
        this._id = _id;
        this.ownerID = ownerID;
        this.name = name;
        this.participants = participants;
        this.creationDate = creationDate;
        this.type = type;
    }
}