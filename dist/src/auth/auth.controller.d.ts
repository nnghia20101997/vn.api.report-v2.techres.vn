import { Response } from 'express';
import { AuthLoginDTO } from './auth.dto/auth.login.dto';
export declare class AuthController {
    constructor();
    userLogin(authLoginDTO: AuthLoginDTO, res: Response): Promise<any>;
}
