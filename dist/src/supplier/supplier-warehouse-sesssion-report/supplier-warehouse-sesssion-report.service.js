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
exports.SupplierWarehouseSesssionReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const supplier_warehouse_sesssion_report_entity_1 = require("./supplier-warehouse-sesssion-report.entity/supplier-warehouse-sesssion-report.entity");
let SupplierWarehouseSesssionReportService = class SupplierWarehouseSesssionReportService {
    constructor(supplierWarehouseSesssionReport) {
        this.supplierWarehouseSesssionReport = supplierWarehouseSesssionReport;
    }
    async spGRpSupplierWarehouseSesssionReport(supplierId, fromDateString, toDateString) {
        let supplierWarehouseSesssion = await this.supplierWarehouseSesssionReport.query('CALL sp_g_rp_supplier_warehouse_sesssion_report(?,?,?,@status,@message); SELECT @status AS status_code, @message AS message_error', [
            supplierId,
            fromDateString,
            toDateString
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(supplierWarehouseSesssion);
        let result = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultDetail(supplierWarehouseSesssion);
        return result;
    }
};
SupplierWarehouseSesssionReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_warehouse_sesssion_report_entity_1.SupplierWarehouseSesssionReportEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierWarehouseSesssionReportService);
exports.SupplierWarehouseSesssionReportService = SupplierWarehouseSesssionReportService;
//# sourceMappingURL=supplier-warehouse-sesssion-report.service.js.map