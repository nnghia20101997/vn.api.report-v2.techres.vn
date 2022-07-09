import { GetTimeDataBase } from "./utils.get.time.database";
import { groupByTimeEnum } from "../utils.enum/utils.group-by-time.enum";
export declare class StoreProcedureGetTimeDatabase {
    time_type: number;
    date_time: string;
    constructor(time_type: number, date_time?: string);
    getTimeType(): false | "" | {
        from_date: string;
        to_date: string;
        group_type: groupByTimeEnum;
    };
    getTimeReport(): GetTimeDataBase;
}
