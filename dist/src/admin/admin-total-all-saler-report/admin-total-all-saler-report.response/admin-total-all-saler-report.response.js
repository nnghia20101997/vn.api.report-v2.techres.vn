"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalAllSalerReportResponse = void 0;
class AdminTotalAllSalerReportResponse {
    constructor(adminTotalAllSalerReportDataModelEntity) {
        this.number_order = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.number_order
            : 0;
        this.order_done = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.order_done
            : 0;
        this.provisional_revenue = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.provisional_revenue
            : 0;
        this.average_value_order = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.average_value_order
            : 0;
        this.revenue_cancel = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.revenue_cancel
            : 0;
        this.revenue_done = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.revenue_done
            : 0;
        this.rate_single_closing = adminTotalAllSalerReportDataModelEntity
            ? +adminTotalAllSalerReportDataModelEntity.rate_single_closing
            : 0;
    }
    mapToList(data) {
        let response = [];
        data.forEach((e) => {
            response.push(new AdminTotalAllSalerReportResponse(e));
        });
        return response;
    }
}
exports.AdminTotalAllSalerReportResponse = AdminTotalAllSalerReportResponse;
//# sourceMappingURL=admin-total-all-saler-report.response.js.map