export interface SMSBodyRequest {
    ApiKey: string;
    SecretKey: string;
    SmsType: number;
    Brandname: string;
    Phone: string;
    Content: string;
}
