import { Body, Delete, Get, JsonController, Param, Patch, Post, Req, Res } from "routing-controllers";
import { IUser } from "../../domain/entities/types";
import { ContainerReq } from "../../config/AwilixContainer";
import to from "await-to-js";
import { Response } from "express";

@JsonController('/users')
export class UserController {

    @Get('/')
    async getUsers(@Req() req: ContainerReq): Promise<IUser[]> {
        const { getUsers } = req.container.cradle;
        return await getUsers.execute();
    }

    @Get('/:id')
    async getUser(@Req() req: ContainerReq, @Param('id') id: string): Promise<IUser> {
        const { getUserById } = req.container.cradle;
        return await getUserById.execute(id);
    }

    @Post('/')
    async createUser(@Req() req: ContainerReq, @Res() res: Response, @Body() userProps: IUser): Promise<any> {
        const { createUser } = req.container.cradle;
        const [err, user] = await to<IUser>(createUser.execute(userProps));

        if (err) return res.status(400).json({ status: 'error', msg: err.message });

        return user;
    }

    @Patch('/:id')
    async updateUser(@Req() req: ContainerReq, @Body() updateProps: any, @Param('id') id: string): Promise<IUser> {
        const { updateUser } = req.container.cradle;
        return await updateUser.execute({ id, updateProps });
    }

    @Delete('/:id')
    async deleteUser(@Req() req: ContainerReq, @Param('id') id: string): Promise<IUser> {
        const { deleteUser } = req.container.cradle;
        return await deleteUser.execute(id);
    }

}