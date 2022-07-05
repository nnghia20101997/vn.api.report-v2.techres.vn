export declare class FcmPushNotification {
    constructor();
    sendSingleNotification(): Promise<void>;
    sendMultiNotification(): Promise<void>;
    sendTopicNotification(): Promise<void>;
    sendUserNotification(): Promise<void>;
}
