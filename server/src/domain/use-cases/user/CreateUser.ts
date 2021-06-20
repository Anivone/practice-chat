import { IUseCase, UserUseCaseProps } from "../types";
import { IUser } from "../../entities/types";
import { IUserRepository } from "../../gateway/IUserRepository";
import to from "await-to-js";

interface CreateUserProps {
    userRepository: IUserRepository;
}

export class CreateUser implements IUseCase<IUser> {

    private userRepository: IUserRepository;

    constructor({ userRepository }: UserUseCaseProps & CreateUserProps) {
        this.userRepository = userRepository;
    }

    async execute(props: IUser): Promise<IUser> {
        const [err, user] = await to<IUser>(this.userRepository.create(props));
        if (err) throw err;

        return user;
    }

}