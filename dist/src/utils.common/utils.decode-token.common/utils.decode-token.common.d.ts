import { DecodeBearerTokenInterFace } from './utils.decode-token.interface.common';
export declare class DecodeToken {
    token: string;
    secret_key: string;
    constructor(token?: string, secret_key?: string);
    verifyBearerToken: (bearerToken: any, secretKey: any) => Promise<DecodeBearerTokenInterFace>;
    splitBearerToken: (token: any) => string;
}
