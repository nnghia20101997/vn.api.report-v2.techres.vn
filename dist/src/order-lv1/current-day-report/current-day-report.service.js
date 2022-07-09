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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentDayReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const restaurant_revenue_by_branch_report_entity_1 = require("./current-day-report.entity/restaurant-revenue-by-branch-report.entity");
const restaurant_revenue_cost_customer_by_restaurant_brand_report_entity_1 = require("./current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity");
const restaurant_revenue_detail_by_restaurant_brand_report_entity_1 = require("./current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity");
let CurrentDayReportService = class CurrentDayReportService {
    async spGetRpRestaurantRevenueByBranch(restaurantId, restaurantBrandId, branchId, fromDateString, toDateString) {
        let result = await this.restaurantRevenueByBranchReportEntity.query('CALL sp_get_rp_restaurant_revenue_by_branch(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultList(result);
        return data;
    }
    async spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(restaurantId, restaurantBrandId, branchId, fromDateString, toDateString) {
        let result = await this.restaurantRevenueCostCustomerByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_cost_customer_by_restaurant_brand(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultDetail(result);
        return data;
    }
    async spGetRpRestaurantRevenueDetailByRestaurantBrand(restaurantId, restaurantBrandId, fromDateString, toDateString) {
        let result = await this.restaurantRevenueDetailByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_detail_by_restaurant_brand(?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            fromDateString,
            toDateString
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultDetail(result);
        return data;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(restaurant_revenue_by_branch_report_entity_1.RestaurantRevenueByBranchReportEntity),
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], CurrentDayReportService.prototype, "restaurantRevenueByBranchReportEntity", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(restaurant_revenue_cost_customer_by_restaurant_brand_report_entity_1.RestaurantRevenueCostCustomerByRestaurantBrandReportEntity),
    __metadata("design:type", typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object)
], CurrentDayReportService.prototype, "restaurantRevenueCostCustomerByRestaurantBrandReportEntity", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(restaurant_revenue_detail_by_restaurant_brand_report_entity_1.RestaurantRevenueDetailByRestaurantBrandReportEntity),
    __metadata("design:type", typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object)
], CurrentDayReportService.prototype, "restaurantRevenueDetailByRestaurantBrandReportEntity", void 0);
CurrentDayReportService = __decorate([
    (0, common_1.Injectable)()
], CurrentDayReportService);
exports.CurrentDayReportService = CurrentDayReportService;
//# sourceMappingURL=current-day-report.service.js.map