import {IUseCase, ChatUseCaseProps} from "../types";
import { IChatRepository } from "../../gateway/IChatRepository";
import {IChat} from "../../entities/types";

export class GetChats implements IUseCase<IChat> {

    chatRepository: IChatRepository;

    constructor({ chatRepository }: ChatUseCaseProps) {
        this.chatRepository = chatRepository;
    }

    execute(props: any): Promise<IChat[]> {
        return this.chatRepository.getAll(props);
    }

}