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
exports.SupplierWarehouseMaterialReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const supplier_warehouse_material_report_entity_1 = require("./supplier-warehouse-material-report.entity/supplier-warehouse-material-report.entity");
let SupplierWarehouseMaterialReportService = class SupplierWarehouseMaterialReportService {
    constructor(supplierWarehouseMaterialReport) {
        this.supplierWarehouseMaterialReport = supplierWarehouseMaterialReport;
    }
    async spGRpSupplierWarehouseMaterialReport(supplierId, materialCategorieId, fromDateString, toDateString, keySearch, pagination) {
        let data = await this.supplierWarehouseMaterialReport.query('CALL sp_g_rp_supplier_warehouse_material_report(?,?,?,?,?,?,?,@import_quantity,@export_quantity,@return_quantity,@remaining_quantity,@total_import_amount,@total_export_amount,@total_return_amount,@total_remaining_amount,@total_record,@status_code,@message_error); SELECT @import_quantity AS import_quantity, @export_quantity AS export_quantity, @return_quantity AS return_quantity, @remaining_quantity AS remaining_quantity, @total_import_amount AS total_import_amount, @total_export_amount AS total_export_amount, @total_return_amount AS total_return_amount, @total_remaining_amount AS total_remaining_amount, @total_record AS total_record, @status_code AS status_code, @message_error AS message_error', [
            supplierId,
            materialCategorieId,
            fromDateString,
            toDateString,
            keySearch,
            pagination.getLimit(),
            pagination.getOffset()
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(data);
        let result = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(data);
        return result;
    }
};
SupplierWarehouseMaterialReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_warehouse_material_report_entity_1.SupplierWarehouseMaterialReportEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierWarehouseMaterialReportService);
exports.SupplierWarehouseMaterialReportService = SupplierWarehouseMaterialReportService;
//# sourceMappingURL=supplier-warehouse-material-report.service.js.map