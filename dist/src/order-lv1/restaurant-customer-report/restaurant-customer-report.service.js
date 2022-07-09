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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantCustomerReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const restaurant_customer_report_entity_1 = require("./restaurant-customer-report.entity/restaurant-customer-report.entity");
let RestaurantCustomerReportService = class RestaurantCustomerReportService {
    constructor(restaurantCustomerReportEntity) {
        this.restaurantCustomerReportEntity = restaurantCustomerReportEntity;
    }
    async spGetRpRestaurantCustomer(restaurantId, restaurantBrandId, branchId, fromDateString, toDateString, groupByType) {
        let result = await this.restaurantCustomerReportEntity.query("CALL sp_get_rp_restaurant_customer(?,?,?,?,?,?, @totalCustomerGoToRestaurant,@totalCustomerRegister,@totalCustomerSavePoint,@totalCustomerUsePoint,@totalCustomerReceivingGifts,@totalOrders,@status,@message); SELECT @totalCustomerGoToRestaurant AS total_customer_go_to_restaurant,@totalCustomerRegister AS total_customer_register,@totalCustomerSavePoint AS total_customer_save_point,@totalCustomerUsePoint AS total_customer_use_point,@totalCustomerReceivingGifts AS total_customer_receiving_gifts,@totalOrders AS total_orders,@status AS status_code,@message AS message_error", [restaurantId, restaurantBrandId, branchId, fromDateString, toDateString, groupByType]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(result);
        return data;
    }
};
RestaurantCustomerReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_customer_report_entity_1.RestaurantCustomerReportEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RestaurantCustomerReportService);
exports.RestaurantCustomerReportService = RestaurantCustomerReportService;
//# sourceMappingURL=restaurant-customer-report.service.js.map