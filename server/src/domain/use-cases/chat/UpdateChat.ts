import { IUseCase, ChatUseCaseProps } from "../types";
import { IChatRepository } from "../../gateway/IChatRepository";
import { IChat } from "../../entities/types";

interface UpdateUseCase {
    id: string,
    updateProps: any,
}

export class UpdateChat implements IUseCase<IChat> {

    chatRepository: IChatRepository;

    constructor({ chatRepository }: ChatUseCaseProps) {
        this.chatRepository = chatRepository;
    }

    execute({ id, updateProps }: UpdateUseCase): Promise<IChat> {
        return this.chatRepository.update(id, updateProps);
    }

}