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
exports.SupplierMaterialPriceChangeHistoriesReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common");
const typeorm_2 = require("typeorm");
const supplier_material_price_change_histories_report_entity_1 = require("./supplier-material-price-change-histories-report.entity/supplier-material-price-change-histories-report.entity");
let SupplierMaterialPriceChangeHistoriesReportService = class SupplierMaterialPriceChangeHistoriesReportService {
    async spRpSupplierMaterialPriceChangeHistories(restaurantId, restaurantBrandId, branchId, supplierId, fromDate, toDate, supplierMaterialId, reportType) {
        let result = await this.supplierMaterialPriceChangeHistoriesReportEntity.query('CALL sp_rp_supplier_material_price_change_histories(?,?,?,?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message', [
            restaurantId,
            restaurantBrandId,
            branchId,
            supplierId,
            fromDate,
            toDate,
            supplierMaterialId,
            reportType
        ]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_common_1.StoreProcedureResult().getResultList(result);
        return data;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(supplier_material_price_change_histories_report_entity_1.SupplierMaterialPriceChangeHistoriesReportEntity),
    __metadata("design:type", typeorm_2.Repository)
], SupplierMaterialPriceChangeHistoriesReportService.prototype, "supplierMaterialPriceChangeHistoriesReportEntity", void 0);
SupplierMaterialPriceChangeHistoriesReportService = __decorate([
    (0, common_1.Injectable)()
], SupplierMaterialPriceChangeHistoriesReportService);
exports.SupplierMaterialPriceChangeHistoriesReportService = SupplierMaterialPriceChangeHistoriesReportService;
//# sourceMappingURL=supplier-material-price-change-histories-report.service.js.map