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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentDayReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_revenue_by_branch_report_query_dto_1 = require("./current-day-report.dto/restaurant-revenue-by-branch-report.query.dto");
const restaurant_revenue_by_branch_report_response_1 = require("./current-day-report.response/restaurant-revenue-by-branch-report.response");
const current_day_report_service_1 = require("./current-day-report.service");
const restaurant_revenue_cost_customer_by_restaurant_brand_report_response_1 = require("./current-day-report.response/restaurant-revenue-cost-customer-by-restaurant-brand-report.response");
const restaurant_revenue_cost_customer_by_restaurant_brand_report_query_dto_1 = require("./current-day-report.dto/restaurant-revenue-cost-customer-by-restaurant-brand-report.query.dto");
const restaurant_revenue_detail_by_restaurant_b_query_dto_1 = require("./current-day-report.dto/restaurant-revenue-detail-by-restaurant-b.query.dto");
const restaurant_revenue_detail_by_restaurant_brand_report_response_1 = require("./current-day-report.response/restaurant-revenue-detail-by-restaurant-brand-report.response");
let CurrentDayReportController = class CurrentDayReportController {
    constructor(currentDayReportService) {
        this.currentDayReportService = currentDayReportService;
    }
    async getRpRestaurantRevenueByBranch(restaurantRevenueByBranchReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.currentDayReportService.spGetRpRestaurantRevenueByBranch(restaurantRevenueByBranchReportQueryDTO.restaurant_id, restaurantRevenueByBranchReportQueryDTO.restaurant_brand_id, restaurantRevenueByBranchReportQueryDTO.branch_id, restaurantRevenueByBranchReportQueryDTO.from_date_string, restaurantRevenueByBranchReportQueryDTO.to_date_string);
        response.setData(new restaurant_revenue_by_branch_report_response_1.RestaurantRevenueByBranchReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
    async GetRpRestaurantRevenueCostCustomerByRestaurantBrand(restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.currentDayReportService.spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_id, restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.restaurant_brand_id, restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.branch_id, restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.from_date_string, restaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO.to_date_string);
        response.setData(new restaurant_revenue_cost_customer_by_restaurant_brand_report_response_1.RestaurantRevenueCostCustomerByRestaurantBrandReportResponse(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
    async getRpRestaurantRevenueDetailByRestaurantBrand(restaurantRevenueDetailByRestaurantBrandReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.currentDayReportService.spGetRpRestaurantRevenueDetailByRestaurantBrand(restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_id, restaurantRevenueDetailByRestaurantBrandReportQueryDTO.restaurant_brand_id, restaurantRevenueDetailByRestaurantBrandReportQueryDTO.from_date_string, restaurantRevenueDetailByRestaurantBrandReportQueryDTO.to_date_string);
        response.setData(new restaurant_revenue_detail_by_restaurant_brand_report_response_1.RestaurantRevenueDetailByRestaurantBrandReportResponse(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)("/restaurant-revenue-by-branch"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_revenue_by_branch_report_query_dto_1.RestaurantRevenueByBranchReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], CurrentDayReportController.prototype, "getRpRestaurantRevenueByBranch", null);
__decorate([
    (0, common_1.Get)("/restaurant-revenue-cost-customer-by-restaurant-brand"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_revenue_cost_customer_by_restaurant_brand_report_query_dto_1.RestaurantRevenueCostCustomerByRestaurantBrandReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], CurrentDayReportController.prototype, "GetRpRestaurantRevenueCostCustomerByRestaurantBrand", null);
__decorate([
    (0, common_1.Get)("/restaurant-revenue-detail-by-restaurant-brand"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_revenue_detail_by_restaurant_b_query_dto_1.RestaurantRevenueDetailByRestaurantBrandReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], CurrentDayReportController.prototype, "getRpRestaurantRevenueDetailByRestaurantBrand", null);
CurrentDayReportController = __decorate([
    (0, common_1.Controller)('api/current-day-report'),
    __metadata("design:paramtypes", [current_day_report_service_1.CurrentDayReportService])
], CurrentDayReportController);
exports.CurrentDayReportController = CurrentDayReportController;
//# sourceMappingURL=current-day-report.controller.js.map