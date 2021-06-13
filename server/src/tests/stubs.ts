import { IContact, IUser } from "../domain/entities/types";
import { Contact } from "../domain/entities/Contact";
import { UserAccount } from "../infrastructure/dto/IUserAccount";

export const contactsStub: IContact[] = [
    new Contact({ ownerID: 'Owner 1', userID: 'User 1', contactName: 'Name 1', contactSurname: 'Surname 1' }),
    new Contact({ ownerID: 'Owner 2', userID: 'User 2', contactName: 'Name 2', contactSurname: 'Surname 2' }),
    new Contact({ ownerID: 'Owner 3', userID: 'User 3', contactName: 'Name 3', contactSurname: 'Surname 3' }),
    new Contact({ ownerID: 'Owner 4', userID: 'User 4', contactName: 'Name 4', contactSurname: 'Surname 4' }),
    new Contact({ ownerID: 'Owner 5', userID: 'User 5', contactName: 'Name 5', contactSurname: 'Surname 5' }),
    new Contact({ ownerID: 'Owner 6', userID: 'User 6', contactName: 'Name 6', contactSurname: 'Surname 6' }),
];

export const usersStub: any = [
    {
        firstName: 'First Name 1',
        lastName: 'Last Name 1',
        userName: 'Username 1',
        email: 'email1@gmail.com',
        city: 'City 1',
        avatar: 'Avatar 1',
        description: 'Description 1',
        phone: 'Phone 1',
        password: 'Password 1',
    },
    {
        firstName: 'First Name 2',
        lastName: 'Last Name 2',
        userName: 'Username 2',
        email: 'email2@gmail.com',
        city: 'City 2',
        avatar: 'Avatar 2',
        description: 'Description 2',
        phone: 'Phone 2',
        password: 'Password 2',
    },
    {
        firstName: 'First Name 3',
        lastName: 'Last Name 3',
        userName: 'Username 3',
        email: 'email3@gmail.com',
        city: 'City 3',
        avatar: 'Avatar 3',
        description: 'Description 3',
        phone: 'Phone 3',
        password: 'Password 3',
    },
]