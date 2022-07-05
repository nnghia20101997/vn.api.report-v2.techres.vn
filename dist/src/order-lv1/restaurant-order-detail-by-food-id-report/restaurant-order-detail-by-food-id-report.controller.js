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
exports.RestaurantOrderDetailByFoodIdReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_order_detail_by_food_id_report_query_dto_1 = require("./restaurant-order-detail-by-food-id-report.dto/restaurant-order-detail-by-food-id-report.query.dto");
const restaurant_order_detail_by_food_id_report_response_1 = require("./restaurant-order-detail-by-food-id-report.response/restaurant-order-detail-by-food-id-report.response");
const restaurant_order_detail_by_food_id_report_service_1 = require("./restaurant-order-detail-by-food-id-report.service");
let RestaurantOrderDetailByFoodIdReportController = class RestaurantOrderDetailByFoodIdReportController {
    constructor(restaurantOrderDetailByFoodIdReportService) {
        this.restaurantOrderDetailByFoodIdReportService = restaurantOrderDetailByFoodIdReportService;
    }
    async getRpRestaurantOrderDetailByFoodId(restaurantOrderDetailByFoodIdReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantOrderDetailByFoodIdReportService.spGetRpRestaurantOrderDetailByFoodId(restaurantOrderDetailByFoodIdReportQueryDTO.restaurant_id, restaurantOrderDetailByFoodIdReportQueryDTO.restaurant_brand_id, restaurantOrderDetailByFoodIdReportQueryDTO.branch_id, restaurantOrderDetailByFoodIdReportQueryDTO.employee_id, restaurantOrderDetailByFoodIdReportQueryDTO.food_id, restaurantOrderDetailByFoodIdReportQueryDTO.from_date_string, restaurantOrderDetailByFoodIdReportQueryDTO.to_date_string, restaurantOrderDetailByFoodIdReportQueryDTO.offset, restaurantOrderDetailByFoodIdReportQueryDTO.limit);
        response.setData(new restaurant_order_detail_by_food_id_report_response_1.RestaurantOrderDetailByFoodIdReportResponse(result.list, result.output));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_order_detail_by_food_id_report_query_dto_1.RestaurantOrderDetailByFoodIdReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantOrderDetailByFoodIdReportController.prototype, "getRpRestaurantOrderDetailByFoodId", null);
RestaurantOrderDetailByFoodIdReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-order-detail-by-food-id-report'),
    __metadata("design:paramtypes", [restaurant_order_detail_by_food_id_report_service_1.RestaurantOrderDetailByFoodIdReportService])
], RestaurantOrderDetailByFoodIdReportController);
exports.RestaurantOrderDetailByFoodIdReportController = RestaurantOrderDetailByFoodIdReportController;
//# sourceMappingURL=restaurant-order-detail-by-food-id-report.controller.js.map