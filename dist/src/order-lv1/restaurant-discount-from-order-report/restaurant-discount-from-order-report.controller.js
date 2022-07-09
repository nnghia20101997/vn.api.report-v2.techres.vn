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
exports.RestaurantDiscountFromOrderReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_discount_from_order_report_query_dto_1 = require("./restaurant-discount-from-order-report.dto/restaurant-discount-from-order-report.query.dto");
const restaurant_discount_from_order_report_response_1 = require("./restaurant-discount-from-order-report.response/restaurant-discount-from-order-report.response");
const restaurant_discount_from_order_report_service_1 = require("./restaurant-discount-from-order-report.service");
let RestaurantDiscountFromOrderReportController = class RestaurantDiscountFromOrderReportController {
    constructor(restaurantDiscountFromOrderReportService) {
        this.restaurantDiscountFromOrderReportService = restaurantDiscountFromOrderReportService;
    }
    async getRpRestaurantDiscountFromOrder(restaurantDiscountFromOrderReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantDiscountFromOrderReportService.spGetRpRestaurantDiscountFromOrder(restaurantDiscountFromOrderReportQueryDTO.restaurant_id, restaurantDiscountFromOrderReportQueryDTO.restaurant_brand_id, restaurantDiscountFromOrderReportQueryDTO.branch_id, restaurantDiscountFromOrderReportQueryDTO.group_by_type, restaurantDiscountFromOrderReportQueryDTO.from_date_string, restaurantDiscountFromOrderReportQueryDTO.to_date_string);
        response.setData(new restaurant_discount_from_order_report_response_1.RestaurantDiscountFromOrderReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_discount_from_order_report_query_dto_1.RestaurantDiscountFromOrderReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], RestaurantDiscountFromOrderReportController.prototype, "getRpRestaurantDiscountFromOrder", null);
RestaurantDiscountFromOrderReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-discount-from-order-report'),
    __metadata("design:paramtypes", [restaurant_discount_from_order_report_service_1.RestaurantDiscountFromOrderReportService])
], RestaurantDiscountFromOrderReportController);
exports.RestaurantDiscountFromOrderReportController = RestaurantDiscountFromOrderReportController;
//# sourceMappingURL=restaurant-discount-from-order-report.controller.js.map