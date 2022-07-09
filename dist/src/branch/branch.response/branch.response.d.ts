import { BranchDataModel } from "../branch.entity/branch.data.model.entity";
export declare class BranchResponse {
    id: number;
    name: string;
    phone: string;
    address: string;
    status: number;
    is_public: number;
    is_office: number;
    employee_manager_id: number;
    enable_checkin: number;
    qr_code_checkin: string;
    image_logo: string;
    banner: string;
    is_allow_advert: number;
    is_enable_booking: number;
    is_have_take_away: number;
    is_working_offline: number;
    restaurant_brand_id: number;
    employee_id: number;
    employee_manager_full_name: string;
    created_at: string;
    constructor(branchDataModel?: BranchDataModel);
    mapToList(data: BranchDataModel[]): {};
}
