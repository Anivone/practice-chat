import { IUseCase, ContactUseCaseProps } from "../types";
import { IContactRepository } from "../../gateway/IContactRepository";
import { IContact } from "../../entities/types";

export class GetContactById implements IUseCase<IContact> {

    contactRepository: IContactRepository;

    constructor({ contactRepository }: ContactUseCaseProps) {
        this.contactRepository = contactRepository;
    }

    execute(contactID: string): Promise<IContact> {
        return this.contactRepository.getById(contactID);
    }

}