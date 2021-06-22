import { IUseCase, MessageUseCaseProps } from "../types";
import { IMessageRepository } from "../../gateway/IMessageRepository";
import { IMessage } from "../../entities/types";

export class GetMessageById implements IUseCase<IMessage> {

    messageRepository: IMessageRepository;

    constructor({ messageRepository }: MessageUseCaseProps) {
        this.messageRepository = messageRepository;
    }

    execute(messageID: string): Promise<IMessage> {
        return this.messageRepository.getById(messageID);
    }

}