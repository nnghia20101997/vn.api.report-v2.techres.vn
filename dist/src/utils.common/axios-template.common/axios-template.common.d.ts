export declare class http {
    constructor();
    static request(url: string, body: object, method: number): Promise<import("axios").AxiosResponse<any, any>>;
}
