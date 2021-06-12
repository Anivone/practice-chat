import { Document, Model, Schema } from "mongoose";
import {IContact} from "../../domain/entities/types";
import {Contact} from "../../domain/entities/Contact";

export interface IContactDocument extends Omit<IContact, '_id'>, Document {
}

export interface IContactModel extends IContact, Model<IContactDocument> {
    toContact(contact: IContact): Contact;
}

const ContactSchema: Schema<IContactDocument> = new Schema<IContactDocument>(
    {
        ownerID: {
            type: Schema.Types.String,
            required: true,
        },
        userID: {
            type: Schema.Types.String,
            required: true,
        },
        contactName: {
            type: Schema.Types.String,
            required: true,
        },
        contactSurname: {
            type: Schema.Types.String,
            unique: true,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);
ContactSchema.statics.toContact = (contact: IContact) => {
    return new Contact({
        _id: contact._id.toString(),
        contactName: contact.contactName,
        contactSurname: contact.contactSurname,
        ownerID: contact.ownerID,
        userID: contact.userID
    })
};

export default ContactSchema;