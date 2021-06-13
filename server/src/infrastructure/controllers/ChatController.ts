import { Body, Delete, Get, JsonController, Param, Patch, Post, Req, Res } from "routing-controllers";
import { IChat } from "../../domain/entities/types";
import { ContainerReq } from "../../config/AwilixContainer";
import { AddChatProps } from "../services/types";
import { ChatService } from "../services/ChatServices";
import to from "await-to-js";
import { Response } from "express";

@JsonController('/chats')
export class ChatController {

    @Get('/')
    async getChats(@Req() req: ContainerReq): Promise<IChat[]> {
        const { getChats } = req.container.cradle;
        return await getChats.execute();
    }

    @Get('/:id')
    async getChat(@Req() req: ContainerReq, @Param('id') id: string): Promise<IChat> {
        const { getChatById } = req.container.cradle;
        return await getChatById.execute(id);
    }

    @Post('/')
    async createChat(@Req() req: ContainerReq, @Res() res: Response, @Body() chatProps: AddChatProps): Promise<any> {
        const { chatService }: { chatService: ChatService } = req.container.cradle;
        const [err, chat] = await to<IChat>(chatService.addChat(chatProps));

        if (err) return res.status(400).json({ status: 'error', msg: err.message });

        return chat;
    }

    @Patch('/:id')
    async updateChat(@Req() req: ContainerReq, @Body() updateProps: any, @Param('id') id: string): Promise<IChat> {
        const { updateChat } = req.container.cradle;
        return await updateChat.execute({ id, updateProps });
    }

    @Delete('/:id')
    async deleteChat(@Req() req: ContainerReq, @Param('id') id: string): Promise<IChat> {
        const { deleteChat } = req.container.cradle;
        return await deleteChat.execute(id);
    }

}