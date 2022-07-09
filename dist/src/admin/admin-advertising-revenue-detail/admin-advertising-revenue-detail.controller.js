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
exports.AdminAdvertisingRevenueDetailController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_format_store_procdure_get_time_database_1 = require("../../utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_advertising_revenue_detail_query_dto_1 = require("./admin-advertising-revenue-detail.dto/admin-advertising-revenue-detail.query.dto");
const admin_advertising_revenue_detail_response_1 = require("./admin-advertising-revenue-detail.response/admin-advertising-revenue-detail.response");
const admin_advertising_revenue_detail_service_1 = require("./admin-advertising-revenue-detail.service");
let AdminAdvertisingRevenueDetailController = class AdminAdvertisingRevenueDetailController {
    constructor(adminAdvertisingRevenueDetailService) {
        this.adminAdvertisingRevenueDetailService = adminAdvertisingRevenueDetailService;
    }
    async spGRpAdminAdvertisingRevenue(adminAdvertisingRevenueDetailQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let fromDate = "";
        let toDate = "";
        let groupByType = 2;
        if (adminAdvertisingRevenueDetailQueryDTO.from_date == "" ||
            adminAdvertisingRevenueDetailQueryDTO.to_date == "") {
            let reportTime = new utils_format_store_procdure_get_time_database_1.StoreProcedureGetTimeDatabase(adminAdvertisingRevenueDetailQueryDTO.report_type).getTimeReport();
            fromDate = reportTime.from_date;
            toDate = reportTime.to_date;
            groupByType = reportTime.group_type;
        }
        else {
            fromDate = utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminAdvertisingRevenueDetailQueryDTO.from_date);
            toDate = utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminAdvertisingRevenueDetailQueryDTO.to_date);
        }
        let result = await this.adminAdvertisingRevenueDetailService.spGRpAdminAdvertisingRevenueDetail(adminAdvertisingRevenueDetailQueryDTO.branch_id, groupByType, fromDate, toDate, adminAdvertisingRevenueDetailQueryDTO._offset, adminAdvertisingRevenueDetailQueryDTO._limit);
        response.setData(new admin_advertising_revenue_detail_response_1.AdminAdvertisingRevenueDetailResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_advertising_revenue_detail_query_dto_1.AdminAdvertisingRevenueDetailQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdminAdvertisingRevenueDetailController.prototype, "spGRpAdminAdvertisingRevenue", null);
AdminAdvertisingRevenueDetailController = __decorate([
    (0, common_1.Controller)("/api/admin-advertising-revenue-detail"),
    __metadata("design:paramtypes", [admin_advertising_revenue_detail_service_1.AdminAdvertisingRevenueDetailService])
], AdminAdvertisingRevenueDetailController);
exports.AdminAdvertisingRevenueDetailController = AdminAdvertisingRevenueDetailController;
//# sourceMappingURL=admin-advertising-revenue-detail.controller.js.map