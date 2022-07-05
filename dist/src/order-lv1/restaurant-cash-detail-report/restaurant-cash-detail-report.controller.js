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
exports.RestaurantCashDetailReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_cash_detail_report_query_dto_1 = require("./restaurant-cash-detail-report.dto/restaurant-cash-detail-report.query.dto");
const restaurant_cash_detail_report_response_1 = require("./restaurant-cash-detail-report.response/restaurant-cash-detail-report.response");
const restaurant_cash_detail_report_service_1 = require("./restaurant-cash-detail-report.service");
let RestaurantCashDetailReportController = class RestaurantCashDetailReportController {
    constructor(restaurantCashDetailReportService) {
        this.restaurantCashDetailReportService = restaurantCashDetailReportService;
    }
    async getRpRestaurantCashDetail(restaurantCashDetailReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantCashDetailReportService.spGetRpRestaurantCashDetail(restaurantCashDetailReportQueryDTO.restaurant_id, restaurantCashDetailReportQueryDTO.restaurant_brand_id, restaurantCashDetailReportQueryDTO.branch_id, restaurantCashDetailReportQueryDTO.key_word, restaurantCashDetailReportQueryDTO.type, restaurantCashDetailReportQueryDTO.from_date_string, restaurantCashDetailReportQueryDTO.to_date_string, restaurantCashDetailReportQueryDTO.offset, restaurantCashDetailReportQueryDTO.limit);
        response.setData(new restaurant_cash_detail_report_response_1.RestaurantCashDetailReportResponse(result.list, result.output));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_cash_detail_report_query_dto_1.RestaurantCashDetailReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantCashDetailReportController.prototype, "getRpRestaurantCashDetail", null);
RestaurantCashDetailReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-cash-detail-report'),
    __metadata("design:paramtypes", [restaurant_cash_detail_report_service_1.RestaurantCashDetailReportService])
], RestaurantCashDetailReportController);
exports.RestaurantCashDetailReportController = RestaurantCashDetailReportController;
//# sourceMappingURL=restaurant-cash-detail-report.controller.js.map