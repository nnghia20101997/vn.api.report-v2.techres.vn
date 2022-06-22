import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { BranchDataModel } from "../branch.entity/branch.data.model.entity";

export class BranchResponse {
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

    constructor(branchDataModel?: BranchDataModel) {
        this.id = branchDataModel ? branchDataModel.id : 0;
        this.name = branchDataModel ? branchDataModel.name : "";
        this.phone = branchDataModel ? branchDataModel.phone: "";
        this.address = branchDataModel ? branchDataModel.address: "";
        this.status = branchDataModel ? branchDataModel.status: 0;
        this.is_public = branchDataModel ? branchDataModel.is_public: 0;
        this.is_office = branchDataModel ? branchDataModel.is_office: 0;
        this.employee_manager_id = branchDataModel ? branchDataModel.employee_manager_id: 0;
        this.enable_checkin = branchDataModel ? branchDataModel.enable_checkin: 0;
        this.qr_code_checkin = branchDataModel ? branchDataModel.qr_code_checkin: "";
        this.image_logo = branchDataModel ? branchDataModel.image_logo: "";
        this.banner = branchDataModel ? branchDataModel.banner: "";
        this.is_allow_advert = branchDataModel ? branchDataModel.is_allow_advert: 0;
        this.is_enable_booking = branchDataModel ? branchDataModel.is_enable_booking: 0;
        this.is_have_take_away = branchDataModel ? branchDataModel.is_have_take_away: 0;
        this.is_working_offline = branchDataModel ? branchDataModel.is_working_offline: 0;
        this.restaurant_brand_id = branchDataModel ? branchDataModel.restaurant_brand_id: 0;
        this.employee_id = branchDataModel ? branchDataModel.employee_id: 0;
        this.employee_manager_full_name = branchDataModel ? branchDataModel.employee_manager_full_name: "";
        this.created_at= branchDataModel ? UtilsDate.formatDateTimeVNToString(branchDataModel.created_at) : ''; 
            
    }

    public mapToList(data: BranchDataModel[]) {
        let response: BranchResponse[] = [];
        data.forEach(e => {
            response.push(new BranchResponse(e));
        })
        return response;
    }
}