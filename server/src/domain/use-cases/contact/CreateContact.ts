import { IContactRepository } from "../../gateway/IContactRepository";
import { Contact } from "../../entities/Contact";
import { IUseCase, ContactUseCaseProps } from "../types";
import { IContact } from "../../entities/types";

export class CreateContact implements IUseCase<IContact> {

    contactRepository: IContactRepository;

    constructor({ contactRepository }: ContactUseCaseProps) {
        this.contactRepository = contactRepository;
    }

    execute(props: IContact): Promise<IContact> {
        const contact = new Contact(props);

        return this.contactRepository.create(contact);
    }

}