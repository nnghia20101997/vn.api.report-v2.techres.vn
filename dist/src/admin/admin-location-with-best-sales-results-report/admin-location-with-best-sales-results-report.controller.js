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
exports.AdminLocationWithBestSalesResultsReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_location_with_best_sales_results_report_query_dto_1 = require("./admin-location-with-best-sales-results-report.dto/admin-location-with-best-sales-results-report.query.dto");
const admin_location_with_best_sales_results_report_response_1 = require("./admin-location-with-best-sales-results-report.response/admin-location-with-best-sales-results-report.response");
const admin_location_with_best_sales_results_report_service_1 = require("./admin-location-with-best-sales-results-report.service");
let AdminLocationWithBestSalesResultsReportController = class AdminLocationWithBestSalesResultsReportController {
    constructor(adminLocationWithBestSalesResultsReportService) {
        this.adminLocationWithBestSalesResultsReportService = adminLocationWithBestSalesResultsReportService;
    }
    async spGRpAdminAdvertisingRevenue(adminLocationWithBestSalesResultsReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminLocationWithBestSalesResultsReportService.spGRpAdminLocationWithBestSalesResultsReport(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminLocationWithBestSalesResultsReportQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminLocationWithBestSalesResultsReportQueryDTO.to_date));
        response.setData(new admin_location_with_best_sales_results_report_response_1.AdminLocationWithBestSalesResultsReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_location_with_best_sales_results_report_query_dto_1.AdminLocationWithBestSalesResultsReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdminLocationWithBestSalesResultsReportController.prototype, "spGRpAdminAdvertisingRevenue", null);
AdminLocationWithBestSalesResultsReportController = __decorate([
    (0, common_1.Controller)("/api/admin-location-with-best-sales-results-report"),
    __metadata("design:paramtypes", [admin_location_with_best_sales_results_report_service_1.AdminLocationWithBestSalesResultsReportService])
], AdminLocationWithBestSalesResultsReportController);
exports.AdminLocationWithBestSalesResultsReportController = AdminLocationWithBestSalesResultsReportController;
//# sourceMappingURL=admin-location-with-best-sales-results-report.controller.js.map