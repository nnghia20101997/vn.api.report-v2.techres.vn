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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOrderDetailByFoodIdReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const restaurant_order_detail_by_food_id_report_entity_1 = require("./restaurant-order-detail-by-food-id-report.entity/restaurant-order-detail-by-food-id-report.entity");
let RestaurantOrderDetailByFoodIdReportService = class RestaurantOrderDetailByFoodIdReportService {
    async spGetRpRestaurantOrderDetailByFoodId(restaurantId, restaurantBrandId, branchId, employeeId, foodId, fromDateString, toDateString, _offset, _limit) {
        let result = await this.restaurantOrderDetailByFoodIdReportEntity.query("CALL sp_get_rp_restaurant_order_detail_by_food_id(?,?,?,?,?,?,?,?,?, @totalRecord,  @status, @messsage); SELECT @totalRecord AS total_record , @status AS status_code , @message AS message_error", [restaurantId, restaurantBrandId, branchId, employeeId, foodId, fromDateString, toDateString, _offset, _limit]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(result);
        return data;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(restaurant_order_detail_by_food_id_report_entity_1.RestaurantOrderDetailByFoodIdReportEntity),
    __metadata("design:type", typeorm_2.Repository)
], RestaurantOrderDetailByFoodIdReportService.prototype, "restaurantOrderDetailByFoodIdReportEntity", void 0);
RestaurantOrderDetailByFoodIdReportService = __decorate([
    (0, common_1.Injectable)()
], RestaurantOrderDetailByFoodIdReportService);
exports.RestaurantOrderDetailByFoodIdReportService = RestaurantOrderDetailByFoodIdReportService;
//# sourceMappingURL=restaurant-order-detail-by-food-id-report.service.js.map