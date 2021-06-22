export class MessageEntity {

    constructor({ userId, chatId, message, date }) {
        this.userId = userId;
        this.chatId = chatId;
        this.message = message;
        this.date = date;
    }

}