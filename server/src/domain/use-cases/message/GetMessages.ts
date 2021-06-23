import { IUseCase, MessageUseCaseProps } from "../types";
import { IMessageRepository } from "../../gateway/IMessageRepository";
import { IMessage } from "../../entities/types";

export class GetMessages implements IUseCase<IMessage> {

    messageRepository: IMessageRepository;

    constructor({ messageRepository }: MessageUseCaseProps) {
        this.messageRepository = messageRepository;
    }

    execute(props: any): Promise<IMessage[]> {
        return this.messageRepository.getAll(props);
    }

}