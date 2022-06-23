export declare class Password {
    private password;
    constructor(password?: string);
    static bcryptPassword(password: string): Promise<string>;
    static sha256Password(password: string): Promise<string>;
    static comparePassword(password: string, bcryptPassword: string): Promise<boolean>;
}
