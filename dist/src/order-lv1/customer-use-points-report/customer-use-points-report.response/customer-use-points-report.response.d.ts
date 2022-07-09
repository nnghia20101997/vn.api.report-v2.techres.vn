import { CustomerUsePointsReportEntity } from "../customer-use-points-report.entity/customer-use-points-report.entity";
export declare class CustomerUsePointsReportResponse {
    customer_id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    name: string;
    prefix: string;
    normalize_name: string;
    email: string;
    avatar: string;
    phone: string;
    gender: number;
    birthday: string;
    address_full_text: string;
    created_at: string;
    point: number;
    accumulate_point: number;
    promotion_point: number;
    alo_point: number;
    constructor(entity?: CustomerUsePointsReportEntity);
    mapToList(data: CustomerUsePointsReportEntity[]): {};
}
