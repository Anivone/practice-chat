import { IUseCase, MessageUseCaseProps } from "../types";
import { IMessageRepository } from "../../gateway/IMessageRepository";
import { IMessage } from "../../entities/types";

interface UpdateUseCase {
    id: string,
    updateProps: any,
}

export class UpdateMessage implements IUseCase<IMessage> {

    messageRepository: IMessageRepository;

    constructor({ messageRepository }: MessageUseCaseProps) {
        this.messageRepository = messageRepository;
    }

    execute({ id, updateProps }: UpdateUseCase): Promise<IMessage> {
        return this.messageRepository.update(id, updateProps);
    }

}