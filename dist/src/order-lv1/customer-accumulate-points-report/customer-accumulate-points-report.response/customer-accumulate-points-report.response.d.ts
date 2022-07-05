import { CustomerAccumulatePointsReportEntity } from "../customer-accumulate-points-report.entity/customer-accumulate-points-report.entity";
export declare class CustomerAccumulatePointsReportResponse {
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
    accumulate_point: number;
    constructor(entity?: CustomerAccumulatePointsReportEntity);
    mapToList(data: CustomerAccumulatePointsReportEntity[]): CustomerAccumulatePointsReportEntity[];
}
