import { IAccount } from "../../domain/entities/types";
import * as jwt from "jsonwebtoken";

export function generateJwtToken(user: Omit<IAccount, 'password'>) {
    return jwt.sign(
        {
            data: {
                userID: user.userID,
                phone: user.phone,
            }
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRATION
        });
}
