import { AdminAdvertisingRevenueDetailDataModelEntity } from "../admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
export declare class AdminAdvertisingRevenueDetailResponse {
    total_price: number;
    report_time: string;
    media_length_by_second: number;
    constructor(adminAdvertisingRevenueDetailDataModelEntity?: AdminAdvertisingRevenueDetailDataModelEntity);
    mapToList(data: AdminAdvertisingRevenueDetailDataModelEntity[]): {};
}
