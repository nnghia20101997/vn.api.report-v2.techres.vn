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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUsePointsReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const customer_use_points_report_entity_1 = require("./customer-use-points-report.entity/customer-use-points-report.entity");
let CustomerUsePointsReportService = class CustomerUsePointsReportService {
    async spGetRpCustomerUsePoints(restaurantId, restaurantBrandId, branchId, fromDateString, toDateString, typePoint, _limit, _offset) {
        let result = await this.customerUsePointsReportEntity.query('CALL sp_get_rp_customer_use_points(?,?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString,
            typePoint,
            _limit,
            _offset
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultList(result);
        return data;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(customer_use_points_report_entity_1.CustomerUsePointsReportEntity),
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], CustomerUsePointsReportService.prototype, "customerUsePointsReportEntity", void 0);
CustomerUsePointsReportService = __decorate([
    (0, common_1.Injectable)()
], CustomerUsePointsReportService);
exports.CustomerUsePointsReportService = CustomerUsePointsReportService;
//# sourceMappingURL=customer-use-points-report.service.js.map