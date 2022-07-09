import { AdminAdvertisingRevenueEntity } from "../admin-advertising-revenue.entity/admin-advertising-revenue.entity";
export declare class AdminAdvertisingRevenueResponse {
    report_time: string;
    total_price: number;
    constructor(adminAdvertisingRevenueEntity?: AdminAdvertisingRevenueEntity);
    mapToList(data: AdminAdvertisingRevenueEntity[]): {};
}
