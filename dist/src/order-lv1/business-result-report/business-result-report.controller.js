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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessResultReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_result_business_and_profit_report_query_dto_1 = require("./business-result-report.dto/restaurant-result-business-and-profit-report.query.dto");
const restaurant_revenue_cost_summary_report_query_dto_1 = require("./business-result-report.dto/restaurant-revenue-cost-summary-report.query.dto");
const restaurant_result_business_and_profit_report_reponse_1 = require("./business-result-report.response/restaurant-result-business-and-profit-report.reponse");
const restaurant_revenue_cost_summary_report_response_1 = require("./business-result-report.response/restaurant-revenue-cost-summary-report.response");
const business_result_report_service_1 = require("./business-result-report.service");
let BusinessResultReportController = class BusinessResultReportController {
    constructor(businessResultReportService) {
        this.businessResultReportService = businessResultReportService;
    }
    async getRpRestaurantResultBusinessAndProfit(restaurantResultBusinessAndProfitReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.businessResultReportService.spGetRpRestaurantResultBusinessAndProfit(restaurantResultBusinessAndProfitReportQueryDTO.restaurant_id, restaurantResultBusinessAndProfitReportQueryDTO.restaurant_brand_id, restaurantResultBusinessAndProfitReportQueryDTO.branch_id, restaurantResultBusinessAndProfitReportQueryDTO.from_date_string, restaurantResultBusinessAndProfitReportQueryDTO.to_date_string, restaurantResultBusinessAndProfitReportQueryDTO.group_by_type);
        response.setData(new restaurant_result_business_and_profit_report_reponse_1.RestaurantResultBusinessAndProfitReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
    async getRpRestaurantRevenueCostSummary(restaurantRevenueCostSummaryReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.businessResultReportService.spGetRpRestaurantRevenueCostSummary(restaurantRevenueCostSummaryReportQueryDTO.restaurant_id, restaurantRevenueCostSummaryReportQueryDTO.restaurant_brand_id, restaurantRevenueCostSummaryReportQueryDTO.branch_id, restaurantRevenueCostSummaryReportQueryDTO.addition_fee_reason_type_id, restaurantRevenueCostSummaryReportQueryDTO.from_date_string, restaurantRevenueCostSummaryReportQueryDTO.to_date_string, restaurantRevenueCostSummaryReportQueryDTO.group_by_type);
        response.setData(new restaurant_revenue_cost_summary_report_response_1.RestaurantRevenueCostSummaryReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)("/restaurant-result-business-and-profit-report"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_result_business_and_profit_report_query_dto_1.RestaurantResultBusinessAndProfitReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BusinessResultReportController.prototype, "getRpRestaurantResultBusinessAndProfit", null);
__decorate([
    (0, common_1.Get)("/restaurant-revenue-cost-summary-report"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_revenue_cost_summary_report_query_dto_1.RestaurantRevenueCostSummaryReportQueryDTO, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BusinessResultReportController.prototype, "getRpRestaurantRevenueCostSummary", null);
BusinessResultReportController = __decorate([
    (0, common_1.Controller)('api/business-result-report'),
    __metadata("design:paramtypes", [business_result_report_service_1.BusinessResultReportService])
], BusinessResultReportController);
exports.BusinessResultReportController = BusinessResultReportController;
//# sourceMappingURL=business-result-report.controller.js.map