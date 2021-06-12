import {IContact} from "../entities/types";

export interface IContactRepository {
    getContacts(filter?: any): Promise<IContact[]>;

    getContactById(contactID: string): Promise<IContact>;

    createContact(contactProps: IContact): Promise<IContact>;

    updateContact(contactID: string, updateProps: any): Promise<IContact>;

    deleteContact(contactID: string): Promise<IContact>;
}