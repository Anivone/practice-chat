import { IContactRepository } from "../../domain/gateway/IContactRepository";
import { IContact } from "../../domain/entities/types";
import { IContactModel } from "../schemas/ContactSchema";
import to from "await-to-js";
import { Contact } from "../../domain/entities/Contact";

interface ContactRepositoryProps {
    ContactModel: IContactModel;
}

export class ContactRepository implements IContactRepository {

    ContactModel: IContactModel;

    constructor({ ContactModel }: ContactRepositoryProps) {
        this.ContactModel = ContactModel;
    }

    async create(contactProps: IContact): Promise<Contact> {
        const [err, contact] = await to<IContact>(new this.ContactModel({
            ownerID: contactProps.ownerID,
            userID: contactProps.userID,
            contactName: contactProps.contactName,
            contactSurname: contactProps.contactSurname,
        }).save())

        if (err) throw err;

        return this.ContactModel.toContact(contact);
    }

    async delete(contactID: string): Promise<Contact> {
        return this.ContactModel.toContact(await this.ContactModel.findByIdAndRemove(contactID));
    }

    async getById(contactID: string): Promise<Contact> {
        return this.ContactModel.toContact(await this.ContactModel.findById(contactID));
    }

    async getAll(filter?: any): Promise<Contact[]> {
        const contacts = await this.ContactModel.find(filter);
        return contacts.map(contact => this.ContactModel.toContact(contact));
    }

    async update(contactID: string, updateProps: any): Promise<Contact> {
        return this.ContactModel.toContact(await this.ContactModel.findByIdAndUpdate(contactID, updateProps));
    }

}