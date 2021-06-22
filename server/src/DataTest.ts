import {User} from "./domain/entities/User";

let date: Date = new Date(500000000000);
export const testUsers = [
    {
        _id: "id1",
        firstName: "andrii",
        latName: "vynnyk",
        username: "anvin",
        email: "email@gmail.com",
        city: "kyiv",
        avatar: "#fff",
        description: "deskr"
    },
    {

        id: "id2",
        firstName: "maxim",
        latName: "voloshko",
        username: "anivone",
        email: "email1@gmail.com",
        city: "obukhiv",
        avatar: "#fff",
        description: "deskr"
    }
]
export const testMessages = [
    {
        _id: "msg1",
        userID: "id1",
        chatID: "chat1",
        content: "Hello world!",
        dateTime: date,
        edited: "No",
    },
    {

        _id: "msg2",
        userID: "id2",
        chatID: "chat1",
        content: "Hello world!",
        dateTime: date,
        edited: "No",
    }

]

export const testAccounts = [
    {
        _id: "acc1",
        phone: "+3804141024",
        password: "password",
        userID: "id1"
    },
    {
        _id: "acc2",
        phone: "+3804141124",
        password: "password1",
        userID: "id2"
    }
]

export const testChats = [
    {
        _id: "chat1",
        ownerID:"id1",
        name:"chatName1",
        participants:["id1","id2"],
        creationDate:date,
        type:"private",
    }
]

export const testContacts = [
    {
        _id: "contact1",
        ownerID: "id1",
        userID: "id2",
        contactName: "myContact",
        contactSurname: "contactSurname",
    },
    {
        _id: "contact2",
        ownerID: "id2",
        userID: "id1",
        contactName: "myContact1",
        contactSurname: "contactSurname",
    }

]