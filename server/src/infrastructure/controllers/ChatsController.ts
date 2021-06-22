import { Body, Delete, Get, JsonController, Param, Patch, Post, Req, Res } from "routing-controllers";
import { IChat } from "../../domain/entities/types";
import { ContainerReq } from "../../config/AwilixContainer";
import to from "await-to-js";
import { Response } from "express";
import { ChatServiceProps } from "../services/types";
import { ChatService } from "../services/ChatService";

@JsonController('/chats')
export class ChatsController {

    @Get('/')
    async getChats(@Req() req: ContainerReq): Promise<IChat[]> {
        const { getChats } = req.container.cradle;
        return await getChats.execute();
    }

    @Get('/:userID')
    async getChatsWithMessages(@Req() req: ContainerReq, @Param('userID') userID: string): Promise<any> {
        const { chatService }: { chatService: ChatService } = req.container.cradle;
        return await chatService.getChatsWithMessages(userID);
    }

    @Get('/:id')
    async getChat(@Req() req: ContainerReq, @Param('id') id: string): Promise<IChat> {
        const { getChatById } = req.container.cradle;
        return await getChatById.execute(id);
    }

    @Post('/')
    async createChat(@Req() req: ContainerReq, @Res() res: Response, @Body() chatProps: IChat): Promise<any> {
        const { createChat } = req.container.cradle;
        const [err, chat] = await to<IChat>(createChat.execute(chatProps));

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