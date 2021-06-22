export class MessageEntity {

    constructor({ userID, chatID, content, dateTime }) {
        this.userID = userID;
        this.chatID = chatID;
        this.content = content;
        this.dateTime = dateTime;
    }

}