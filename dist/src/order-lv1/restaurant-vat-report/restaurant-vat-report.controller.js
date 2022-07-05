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
exports.RestaurantVatReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_vat_report_query_dto_1 = require("./restaurant-vat-report.dto/restaurant-vat-report.query.dto");
const restaurant_vat_report_response_1 = require("./restaurant-vat-report.response/restaurant-vat-report.response");
const restaurant_vat_report_service_1 = require("./restaurant-vat-report.service");
let RestaurantVatReportController = class RestaurantVatReportController {
    constructor(restaurantVatReportService) {
        this.restaurantVatReportService = restaurantVatReportService;
    }
    async getRpRestaurantRevenueByBranch(restaurantVatReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantVatReportService.spGetRpRestaurantVat(restaurantVatReportQueryDTO.restaurant_id, restaurantVatReportQueryDTO.restaurant_brand_id, restaurantVatReportQueryDTO.branch_id, restaurantVatReportQueryDTO.from_date_string, restaurantVatReportQueryDTO.to_date_string, restaurantVatReportQueryDTO.group_by_type);
        response.setData(new restaurant_vat_report_response_1.RestaurantVatReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_vat_report_query_dto_1.RestaurantVatReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantVatReportController.prototype, "getRpRestaurantRevenueByBranch", null);
RestaurantVatReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-vat-report'),
    __metadata("design:paramtypes", [restaurant_vat_report_service_1.RestaurantVatReportService])
], RestaurantVatReportController);
exports.RestaurantVatReportController = RestaurantVatReportController;
//# sourceMappingURL=restaurant-vat-report.controller.js.map