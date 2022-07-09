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
exports.SupplierOrderListReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplier_order_list_report_entity_1 = require("./supplier-order-list-report.entity/supplier-order-list-report.entity");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
let SupplierOrderListReportService = class SupplierOrderListReportService {
    constructor(supplierOrderListReport) {
        this.supplierOrderListReport = supplierOrderListReport;
    }
    async spGRpSupplierOrderListReport(supplierId, fromDateString, toDateString, keySearch, pagination) {
        let supplierOrderListReport = await this.supplierOrderListReport.query('CALL sp_g_rp_supplier_order_list_report(?,?,?,?,?,?,@totalRecord,@status,@message); SELECT @status AS status_code , @message AS message_error, @totalRecord AS total_record', [
            supplierId,
            fromDateString,
            toDateString,
            keySearch,
            pagination.getLimit(),
            pagination.getOffset()
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(supplierOrderListReport);
        let result = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultPagination(supplierOrderListReport);
        return result;
    }
};
SupplierOrderListReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_order_list_report_entity_1.SupplierOrderListReportEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierOrderListReportService);
exports.SupplierOrderListReportService = SupplierOrderListReportService;
//# sourceMappingURL=supplier-order-list-report.service.js.map