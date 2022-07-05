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
exports.RestaurantCashDetailReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const restaurant_cash_detail_report_entity_1 = require("./restaurant-cash-detail-report.entity/restaurant-cash-detail-report.entity");
let RestaurantCashDetailReportService = class RestaurantCashDetailReportService {
    constructor(restaurantCashDetailReportEntity) {
        this.restaurantCashDetailReportEntity = restaurantCashDetailReportEntity;
    }
    async spGetRpRestaurantCashDetail(restaurantId, restaurantBrandId, branchId, keyWord, _type, fromDateString, toDateString, _offset, _limit) {
        let result = await this.restaurantCashDetailReportEntity.query("CALL sp_get_rp_restaurant_cash_detail(?,?,?,?,?,?,?,?,?, @totalAmountReceipt, @totalAmountPayment ,@totalAmount,@totalRecordReceipt, @totalRecordPayment, @totalRecord,  @status, @messsage); SELECT @totalAmountReceipt AS total_amount_receipt, @totalAmountPayment AS total_amount_payment ,@totalAmount AS total_amount,@totalRecordReceipt AS total_record_receipt, @totalRecordPayment AS total_record_payment, @totalRecord AS total_record , @status AS status_code , @message AS message_error", [restaurantId, restaurantBrandId, branchId, keyWord, _type, fromDateString, toDateString, _offset, _limit]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(result);
        return data;
    }
};
RestaurantCashDetailReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_cash_detail_report_entity_1.RestaurantCashDetailReportEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestaurantCashDetailReportService);
exports.RestaurantCashDetailReportService = RestaurantCashDetailReportService;
//# sourceMappingURL=restaurant-cash-detail-report.service.js.map