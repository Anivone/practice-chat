import { IChatRepository } from "../../gateway/IChatRepository";
import { Chat } from "../../entities/Chat";
import { IUseCase, ChatUseCaseProps } from "../types";
import { IChat } from "../../entities/types";

export class CreateChat implements IUseCase<IChat> {
    chatRepository: IChatRepository;

    constructor({ chatRepository }: ChatUseCaseProps) {
        this.chatRepository = chatRepository;
    }

    execute(props: IChat): Promise<IChat> {
        const chat = new Chat(props);

        return this.chatRepository.create(chat);
    }

}