import {IUseCase, ChatUseCaseProps} from "../types";
import {IChat} from "../../entities/types";
import {IChatRepository} from "../../gateway/IChatRepository";

export class DeleteChat implements IUseCase<IChat> {

    chatRepository: IChatRepository;

    constructor({ chatRepository }: ChatUseCaseProps) {
        this.chatRepository = chatRepository;
    }

    execute(chatID: string): Promise<IChat> {
        return this.chatRepository.delete(chatID);
    }

}