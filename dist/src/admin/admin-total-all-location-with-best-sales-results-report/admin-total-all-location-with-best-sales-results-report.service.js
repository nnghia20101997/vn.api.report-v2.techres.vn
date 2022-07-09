"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalAllLocationWithBestSalesResultsReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const admin_total_all_location_with_best_sales_results_report_data_model_entity_1 = require("./admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity");
let AdminTotalAllLocationWithBestSalesResultsReportService = class AdminTotalAllLocationWithBestSalesResultsReportService {
    constructor(adminTotalAllLocationWithBestSalesResultsReportDataModelEntity) {
        this.adminTotalAllLocationWithBestSalesResultsReportDataModelEntity = adminTotalAllLocationWithBestSalesResultsReportDataModelEntity;
    }
    async spGRpAdminTotalAllLocationWithBestSalesResultsReport(fromDate, toDate) {
        let result = await this.adminTotalAllLocationWithBestSalesResultsReportDataModelEntity.query("CALL sp_g_rp_admin_total_all_location_with_best_sales_results_report(?,?,@status,@message); SELECT @status AS status , @message AS message", [fromDate, toDate]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultDetail(result);
        return data;
    }
};
AdminTotalAllLocationWithBestSalesResultsReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_total_all_location_with_best_sales_results_report_data_model_entity_1.AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AdminTotalAllLocationWithBestSalesResultsReportService);
exports.AdminTotalAllLocationWithBestSalesResultsReportService = AdminTotalAllLocationWithBestSalesResultsReportService;
//# sourceMappingURL=admin-total-all-location-with-best-sales-results-report.service.js.map