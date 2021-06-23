import { IUseCase, ContactUseCaseProps } from "../types";
import { IContactRepository } from "../../gateway/IContactRepository";
import { IContact } from "../../entities/types";

interface UpdateUseCase {
    id: string,
    updateProps: any,
}

export class UpdateContact implements IUseCase<IContact> {

    contactRepository: IContactRepository;

    constructor({ contactRepository }: ContactUseCaseProps) {
        this.contactRepository = contactRepository;
    }

    execute({ id, updateProps }: UpdateUseCase): Promise<IContact> {
        return this.contactRepository.update(id, updateProps);
    }

}