import { IUseCase, ContactUseCaseProps } from "../types";
import { IContactRepository } from "../../gateway/IContactRepository";
import { IContact } from "../../entities/types";

export class GetContacts implements IUseCase<IContact> {

    contactRepository: IContactRepository;

    constructor({ contactRepository }: ContactUseCaseProps) {
        this.contactRepository = contactRepository;
    }

    execute(props: any): Promise<IContact[]> {
        return this.contactRepository.getAll(props);
    }

}