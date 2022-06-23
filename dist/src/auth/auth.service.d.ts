import { Provider } from '@nestjs/common';
import { AuthLoginDTO } from './auth.dto/auth.login.dto';
export declare class AuthService {
    static LocalStrategy: Provider<any>;
    constructor();
    login(authLoginDTO: AuthLoginDTO): Promise<void>;
}
