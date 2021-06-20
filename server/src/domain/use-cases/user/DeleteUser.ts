import { IUseCase, UserUseCaseProps } from "../types";
import { IUserRepository } from "../../gateway/IUserRepository";
import { IUser } from "../../entities/types";
import to from "await-to-js";
import { DeleteAccountByUserId } from "../account/DeleteAccountByUserId";

interface DeleteUserProps {
    deleteAccountByUserId: DeleteAccountByUserId;
}

export class DeleteUser implements IUseCase<IUser> {

    userRepository: IUserRepository;
    deleteAccountByUserId: DeleteAccountByUserId;

    constructor({ userRepository, deleteAccountByUserId }: UserUseCaseProps & DeleteUserProps) {
        this.userRepository = userRepository;
        this.deleteAccountByUserId = deleteAccountByUserId;
    }

    async execute(props: string): Promise<IUser> {
        const [err, user] = await to<IUser>(this.userRepository.getById(props));
        if (err) throw err;

        const [err3] = await to(this.deleteAccountByUserId.execute(user._id));
        if (err3) throw err3;

        const [err4] = await to(this.userRepository.delete(user._id));
        if (err4) throw err4;

        return user;
    }

}