import { IAccountRepository } from "../gateway/IAccountRepository";
import { IUserRepository } from "../gateway/IUserRepository";
// @ts-ignore
import { IContactRepository } from "../gateway/IContactRepository";
// @ts-ignore
import { IMessageRepository } from "../gateway/IMessageRepository";
// @ts-ignore
import { IChatRepository } from "../gateway/IChatRepository";


export interface IUseCase<T> {
    execute(props: any): Promise<T> | Promise<T[]>
}

export interface AccountUseCaseProps {
    accountRepository: IAccountRepository;
}

export interface UserUseCaseProps {
    userRepository: IUserRepository;
}

export interface ContactUseCaseProps {
    contactRepository: IContactRepository;
}

export interface MessageUseCaseProps {
    messageRepository: IMessageRepository;
}

export interface ChatUseCaseProps {
    chatRepository: IChatRepository;
}
