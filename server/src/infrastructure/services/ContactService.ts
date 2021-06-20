import { GetContacts } from "../../domain/use-cases/contact/GetContacts";
import { IContact, IUser } from "../../domain/entities/types";
import to from "await-to-js";
import { GetUsers } from "../../domain/use-cases/user/GetUsers";
import { CreateContact } from "../../domain/use-cases/contact/CreateContact";
import { AddContactProps, ContactServiceProps } from "./types";

export class ContactService {
    private getUsers: GetUsers;
    private getContacts: GetContacts;
    private createContact: CreateContact;

    constructor({ getUsers, getContacts, createContact }: ContactServiceProps) {
        this.getUsers = getUsers;
        this.getContacts = getContacts;
        this.createContact = createContact;
    }

    async addContact(props: AddContactProps): Promise<IContact> {
        const [err1, users] = await to<IUser[]>(this.getUsers.execute({ nickname: props.userNickname }));
        if (err1) throw err1;
        if (!users[0]) throw new Error('No user with such nickname was found');

        const user = users[0];

        const [err2, contacts] = await to<IContact[]>(this.getContacts.execute({
            contactName: props.contactName,
            contactSurname: props.contactSurname
        }));
        if (err2) throw err2;
        if (contacts[0]) throw new Error('Contact with such name and surname already exists');

        const [err3, contact] = await to<IContact>(this.createContact.execute({
            ownerID: props.ownerID,
            userID: user._id,
            contactName: props.contactName,
            contactSurname: props.contactSurname
        }));
        if (err3) throw err3;

        return contact;
    }

}