export declare class StoreProcedureGetTimeDatabase {
    time_type: reportTypeEnum;
    constructor(time_type: any);
    getTimeType(): false | "" | {
        from_date: string;
        to_date: string;
        group_type: any;
    };
}
