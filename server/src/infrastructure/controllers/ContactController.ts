import { Body, Delete, Get, JsonController, Param, Patch, Post, Req, Res } from "routing-controllers";
import { IContact } from "../../domain/entities/types";
import { ContainerReq } from "../../config/AwilixContainer";
import { AddContactProps } from "../services/types";
import { ContactService } from "../services/ContactService";
import to from "await-to-js";
import { Response } from "express";

@JsonController('/contacts')
export class ContactController {

    @Get('/')
    async getContacts(@Req() req: ContainerReq): Promise<IContact[]> {
        const { getContacts } = req.container.cradle;
        return await getContacts.execute();
    }

    @Get('/:id')
    async getContact(@Req() req: ContainerReq, @Param('id') id: string): Promise<IContact> {
        const { getContactById } = req.container.cradle;
        return await getContactById.execute(id);
    }

    @Post('/')
    async createContact(@Req() req: ContainerReq, @Res() res: Response, @Body() contactProps: AddContactProps): Promise<any> {
        const { contactService }: { contactService: ContactService } = req.container.cradle;
        const [err, contact] = await to<IContact>(contactService.addContact(contactProps));

        if (err) return res.status(400).json({ status: 'error', msg: err.message });

        return contact;
    }

    @Patch('/:id')
    async updateContact(@Req() req: ContainerReq, @Body() updateProps: any, @Param('id') id: string): Promise<IContact> {
        const { updateContact } = req.container.cradle;
        return await updateContact.execute({ id, updateProps });
    }

    @Delete('/:id')
    async deleteContact(@Req() req: ContainerReq, @Param('id') id: string): Promise<IContact> {
        const { deleteContact } = req.container.cradle;
        return await deleteContact.execute(id);
    }

}