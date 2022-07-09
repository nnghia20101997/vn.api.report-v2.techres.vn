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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTotalAllLocationWithBestSalesResultsReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_total_all_location_with_best_sales_results_report_query_dto_1 = require("./admin-total-all-location-with-best-sales-results-report.dto/admin-total-all-location-with-best-sales-results-report.query.dto");
const admin_total_all_location_with_best_sales_results_report_response_1 = require("./admin-total-all-location-with-best-sales-results-report.response/admin-total-all-location-with-best-sales-results-report.response");
const admin_total_all_location_with_best_sales_results_report_service_1 = require("./admin-total-all-location-with-best-sales-results-report.service");
let AdminTotalAllLocationWithBestSalesResultsReportController = class AdminTotalAllLocationWithBestSalesResultsReportController {
    constructor(adminTotalAllLocationWithBestSalesResultsReportService) {
        this.adminTotalAllLocationWithBestSalesResultsReportService = adminTotalAllLocationWithBestSalesResultsReportService;
    }
    async spGRpAdminAdvertisingRevenue(adminTotalAllLocationWithBestSalesResultsReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminTotalAllLocationWithBestSalesResultsReportService.spGRpAdminTotalAllLocationWithBestSalesResultsReport(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminTotalAllLocationWithBestSalesResultsReportQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminTotalAllLocationWithBestSalesResultsReportQueryDTO.to_date));
        response.setData(new admin_total_all_location_with_best_sales_results_report_response_1.AdminTotalAllLocationWithBestSalesResultsReportResponse(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_total_all_location_with_best_sales_results_report_query_dto_1.AdminTotalAllLocationWithBestSalesResultsReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdminTotalAllLocationWithBestSalesResultsReportController.prototype, "spGRpAdminAdvertisingRevenue", null);
AdminTotalAllLocationWithBestSalesResultsReportController = __decorate([
    (0, common_1.Controller)("/api/admin-total-all-location-with-best-sales-results-report"),
    __metadata("design:paramtypes", [admin_total_all_location_with_best_sales_results_report_service_1.AdminTotalAllLocationWithBestSalesResultsReportService])
], AdminTotalAllLocationWithBestSalesResultsReportController);
exports.AdminTotalAllLocationWithBestSalesResultsReportController = AdminTotalAllLocationWithBestSalesResultsReportController;
//# sourceMappingURL=admin-total-all-location-with-best-sales-results-report.controller.js.map