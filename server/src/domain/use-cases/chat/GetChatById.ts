import { IUseCase, ChatUseCaseProps } from "../types";
import { IChatRepository } from "../../gateway/IChatRepository";
import { IChat } from "../../entities/types";

export class GetChatById implements IUseCase<IChat> {

    chatRepository: IChatRepository;

    constructor({ chatRepository }: ChatUseCaseProps) {
        this.chatRepository = chatRepository;
    }

    execute(chatID: string): Promise<IChat> {
        return this.chatRepository.getById(chatID);
    }

}