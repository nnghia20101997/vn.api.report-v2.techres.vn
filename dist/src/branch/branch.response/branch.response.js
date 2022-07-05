"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchResponse = void 0;
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
class BranchResponse {
    constructor(branchDataModel) {
        this.id = branchDataModel ? branchDataModel.id : 0;
        this.name = branchDataModel ? branchDataModel.name : "";
        this.phone = branchDataModel ? branchDataModel.phone : "";
        this.address = branchDataModel ? branchDataModel.address : "";
        this.status = branchDataModel ? branchDataModel.status : 0;
        this.is_public = branchDataModel ? branchDataModel.is_public : 0;
        this.is_office = branchDataModel ? branchDataModel.is_office : 0;
        this.employee_manager_id = branchDataModel ? branchDataModel.employee_manager_id : 0;
        this.enable_checkin = branchDataModel ? branchDataModel.enable_checkin : 0;
        this.qr_code_checkin = branchDataModel ? branchDataModel.qr_code_checkin : "";
        this.image_logo = branchDataModel ? branchDataModel.image_logo : "";
        this.banner = branchDataModel ? branchDataModel.banner : "";
        this.is_allow_advert = branchDataModel ? branchDataModel.is_allow_advert : 0;
        this.is_enable_booking = branchDataModel ? branchDataModel.is_enable_booking : 0;
        this.is_have_take_away = branchDataModel ? branchDataModel.is_have_take_away : 0;
        this.is_working_offline = branchDataModel ? branchDataModel.is_working_offline : 0;
        this.restaurant_brand_id = branchDataModel ? branchDataModel.restaurant_brand_id : 0;
        this.employee_id = branchDataModel ? branchDataModel.employee_id : 0;
        this.employee_manager_full_name = branchDataModel ? branchDataModel.employee_manager_full_name : "";
        this.created_at = branchDataModel ? utils_format_time_common_1.UtilsDate.formatDateTimeVNToString(branchDataModel.created_at) : '';
    }
    mapToList(data) {
        let response = [];
        data.forEach(e => {
            response.push(new BranchResponse(e));
        });
        return response;
    }
}
exports.BranchResponse = BranchResponse;
//# sourceMappingURL=branch.response.js.map