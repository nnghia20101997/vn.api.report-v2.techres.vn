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
exports.RestaurantDiscountFromOrderReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const restaurant_discount_from_order_report_entity_1 = require("./restaurant-discount-from-order-report.entity/restaurant-discount-from-order-report.entity");
let RestaurantDiscountFromOrderReportService = class RestaurantDiscountFromOrderReportService {
    async spGetRpRestaurantDiscountFromOrder(restaurantId, restaurantBrandId, branchId, groupByType, fromDateString, toDateString) {
        let result = await this.restaurantDiscountFromOrderReportEntity.query('CALL sp_get_rp_restaurant_discount_from_order(?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            branchId,
            groupByType,
            fromDateString,
            toDateString
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultList(result);
        return data;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(restaurant_discount_from_order_report_entity_1.RestaurantDiscountFromOrderReportEntity),
    __metadata("design:type", typeorm_2.Repository)
], RestaurantDiscountFromOrderReportService.prototype, "restaurantDiscountFromOrderReportEntity", void 0);
RestaurantDiscountFromOrderReportService = __decorate([
    (0, common_1.Injectable)()
], RestaurantDiscountFromOrderReportService);
exports.RestaurantDiscountFromOrderReportService = RestaurantDiscountFromOrderReportService;
//# sourceMappingURL=restaurant-discount-from-order-report.service.js.map