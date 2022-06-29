import { AdminAdvertisingRevenueEntity } from "../admin-advertising-revenue.entity/admin-advertising-revenue.entity";
export declare class AdminAdvertisingRevenueResponse {
    report_time: number;
    total_price: number;
    report_day: string;
    constructor(adminAdvertisingRevenueEntity?: AdminAdvertisingRevenueEntity);
    mapToList(data: AdminAdvertisingRevenueEntity[]): AdminAdvertisingRevenueResponse[];
}
