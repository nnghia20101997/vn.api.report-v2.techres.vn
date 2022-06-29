"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSalerDetailReportResponse = void 0;
class AdminSalerDetailReportResponse {
    constructor(adminSalerDetailReportDataModelEntity) {
        this.saler_id = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.saler_id
            : 0;
        this.saler_name = adminSalerDetailReportDataModelEntity
            ? adminSalerDetailReportDataModelEntity.saler_name
            : "";
        this.number_order = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.number_order
            : 0;
        this.order_done = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.order_done
            : 0;
        this.provisional_revenue = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.provisional_revenue
            : 0;
        this.average_value_order = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.average_value_order
            : 0;
        this.revenue_cancel = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.revenue_cancel
            : 0;
        this.revenue_done = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.revenue_done
            : 0;
        this.rate_single_closing = adminSalerDetailReportDataModelEntity
            ? +adminSalerDetailReportDataModelEntity.rate_single_closing
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminSalerDetailReportResponse(e));
        });
        return response;
    }
}
exports.AdminSalerDetailReportResponse = AdminSalerDetailReportResponse;
//# sourceMappingURL=admin-saler-detail-report.response.js.map