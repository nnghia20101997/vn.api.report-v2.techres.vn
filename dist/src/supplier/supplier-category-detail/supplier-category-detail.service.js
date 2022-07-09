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
exports.SupplierCategoryDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const supplier_category_detail_data_model_entity_1 = require("./supplier-category-detail.entity/supplier-category-detail.data.model.entity");
let SupplierCategoryDetailService = class SupplierCategoryDetailService {
    constructor(supplierCategoryDetailDataModelEntity) {
        this.supplierCategoryDetailDataModelEntity = supplierCategoryDetailDataModelEntity;
    }
    async spGRpSupplierCategoryDetail(supplierId, materialCategorieId, fromDate, toDate, _limit, _offset) {
        let result = await this.supplierCategoryDetailDataModelEntity.query("CALL sp_g_rp_supplier_category_detail(?,?,?,?,?,?,@import_quantity,@export_quantity,@return_quantity,@remaining_quantity,@total_import_amount,@total_export_amount,@total_return_amount,@total_remaining_amount,@total_record,@status,@message); SELECT @import_quantity AS import_quantity, @export_quantity AS export_quantity, @return_quantity AS return_quantity, @remaining_quantity AS remaining_quantity, @total_import_amount AS total_import_amount, @total_export_amount AS total_export_amount, @total_return_amount AS total_return_amount, @total_remaining_amount AS total_remaining_amount, @total_record AS total_record,@status AS status_code , @message AS message_error", [supplierId, materialCategorieId, fromDate, toDate, _limit, _offset]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(result);
        return data;
    }
};
SupplierCategoryDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_category_detail_data_model_entity_1.SupplierCategoryDetailDataModelEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierCategoryDetailService);
exports.SupplierCategoryDetailService = SupplierCategoryDetailService;
//# sourceMappingURL=supplier-category-detail.service.js.map