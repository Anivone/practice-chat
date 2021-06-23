import { IMessageRepository } from "../../gateway/IMessageRepository";
import { Message } from "../../entities/Message";
import { IUseCase, MessageUseCaseProps } from "../types";
import { IMessage } from "../../entities/types";

export class CreateMessage implements IUseCase<IMessage> {

    messageRepository: IMessageRepository;

    constructor({ messageRepository }: MessageUseCaseProps) {
        this.messageRepository = messageRepository;
    }

    execute(props: IMessage): Promise<IMessage> {
        const message = new Message(props);

        return this.messageRepository.create(message);
    }

}