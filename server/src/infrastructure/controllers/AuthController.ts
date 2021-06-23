import { Body, Get, JsonController, Post, Req, Res } from "routing-controllers";
import { ContainerReq } from "../../config/AwilixContainer";
import to from "await-to-js";
import { Response } from "express";
import { UserAccount } from "../dto/IUserAccount";

@JsonController('/auth')
export class AuthController {

    // @Get('/auth')
    // async authenticate(@Req() req: ContainerReq, @Res() res: Response): Promise<any> {
    //     const { userService } = req.container.cradle;
    //
    //     const token = req.headers.authorization
    //         ? req.headers.authorization.split(' ')[1]
    //         : null;
    //     if (!token) return res.status(401);
    //
    //     const [err, user] = await to<UserAccount>(userService.authenticate(token));
    //     if (err) throw err;
    //
    //     const newToken = generateJwtToken({
    //         phone: user.phone,
    //         userID: user.userID,
    //     });
    //
    //     res.setHeader('Authorization', 'Bearer ' + newToken);
    //
    //     return {
    //         message: 'Authentication has been successful',
    //         user,
    //         token: newToken
    //     }
    // }

    @Post('/login')
    async login(@Req() req: ContainerReq, @Res() res: Response, @Body() body: any): Promise<any> {
        const { userService } = req.container.cradle;

        const [err, user] = await to<UserAccount>(userService.login(body.phone, body.password))
        if (err) throw err;

        return {
            message: 'User has successfully logged in',
            user,
        }
    }

    @Post('/signup')
    async signup(@Req() req: ContainerReq, @Res() res: Response, @Body() body: any): Promise<any> {
        const { userService } = req.container.cradle;
        const [err, user] = await to<UserAccount>(userService.signup(body));

        if (err) return res.status(400).json({
            status: 'error',
            msg: err.message,
        });

        return {
            message: 'User has successfully signed up',
            user,
        }
    }

}