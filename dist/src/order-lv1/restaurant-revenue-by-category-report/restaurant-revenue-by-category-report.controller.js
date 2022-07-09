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
exports.RestaurantRevenueByCategoryReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_revenue_by_category_report_query_dto_1 = require("./restaurant-revenue-by-category-report.dto/restaurant-revenue-by-category-report.query.dto");
const restaurant_revenue_by_category_report_response_1 = require("./restaurant-revenue-by-category-report.response/restaurant-revenue-by-category-report.response");
const restaurant_revenue_by_category_report_service_1 = require("./restaurant-revenue-by-category-report.service");
let RestaurantRevenueByCategoryReportController = class RestaurantRevenueByCategoryReportController {
    constructor(restaurantRevenueByCategoryReportService) {
        this.restaurantRevenueByCategoryReportService = restaurantRevenueByCategoryReportService;
    }
    async getRpRestaurantRevenueByCategory(restaurantRevenueByCategoryReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantRevenueByCategoryReportService.spGetRpRestaurantRevenueByCategory(restaurantRevenueByCategoryReportQueryDTO.restaurant_id, restaurantRevenueByCategoryReportQueryDTO.restaurant_brand_id, restaurantRevenueByCategoryReportQueryDTO.branch_id, restaurantRevenueByCategoryReportQueryDTO.category_type, restaurantRevenueByCategoryReportQueryDTO.from_date_string, restaurantRevenueByCategoryReportQueryDTO.to_date_string);
        response.setData(new restaurant_revenue_by_category_report_response_1.RestaurantRevenueByCategoryReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_revenue_by_category_report_query_dto_1.RestaurantRevenueByCategoryReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], RestaurantRevenueByCategoryReportController.prototype, "getRpRestaurantRevenueByCategory", null);
RestaurantRevenueByCategoryReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-revenue-by-category-report'),
    __metadata("design:paramtypes", [restaurant_revenue_by_category_report_service_1.RestaurantRevenueByCategoryReportService])
], RestaurantRevenueByCategoryReportController);
exports.RestaurantRevenueByCategoryReportController = RestaurantRevenueByCategoryReportController;
//# sourceMappingURL=restaurant-revenue-by-category-report.controller.js.map