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
exports.RestaurantOrderExtraChargeReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_order_extra_charge_report_query_dto_1 = require("./restaurant-order-extra-charge-report.dto/restaurant-order-extra-charge-report.query.dto");
const restaurant_order_extra_charge_report_response_1 = require("./restaurant-order-extra-charge-report.response/restaurant-order-extra-charge-report.response");
const restaurant_order_extra_charge_report_service_1 = require("./restaurant-order-extra-charge-report.service");
let RestaurantOrderExtraChargeReportController = class RestaurantOrderExtraChargeReportController {
    constructor(restaurantOrderExtraChargeReportService) {
        this.restaurantOrderExtraChargeReportService = restaurantOrderExtraChargeReportService;
    }
    async getRpRestaurantRevenueByBranch(restaurantOrderExtraChargeReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantOrderExtraChargeReportService.spGetRpRestaurantVat(restaurantOrderExtraChargeReportQueryDTO.restaurant_id, restaurantOrderExtraChargeReportQueryDTO.restaurant_brand_id, restaurantOrderExtraChargeReportQueryDTO.branch_id, restaurantOrderExtraChargeReportQueryDTO.group_by_type, restaurantOrderExtraChargeReportQueryDTO.from_date_string, restaurantOrderExtraChargeReportQueryDTO.to_date_string);
        response.setData(new restaurant_order_extra_charge_report_response_1.RestaurantOrderExtraChargeReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_order_extra_charge_report_query_dto_1.RestaurantOrderExtraChargeReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], RestaurantOrderExtraChargeReportController.prototype, "getRpRestaurantRevenueByBranch", null);
RestaurantOrderExtraChargeReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-order-extra-charge-report'),
    __metadata("design:paramtypes", [restaurant_order_extra_charge_report_service_1.RestaurantOrderExtraChargeReportService])
], RestaurantOrderExtraChargeReportController);
exports.RestaurantOrderExtraChargeReportController = RestaurantOrderExtraChargeReportController;
//# sourceMappingURL=restaurant-order-extra-charge-report.controller.js.map