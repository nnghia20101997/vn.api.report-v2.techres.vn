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
exports.SupplierTotalDebtAndDebitListAndPublicCollectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_store_procedure_exception_common_1 = require("../../utils.common/utils.exception.common/utils.store-procedure-exception.common");
const utils_store_procedure_result_output_common_1 = require("../../utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common");
const typeorm_2 = require("typeorm");
const supplier_total_debt_and_debit_list_and_public_collection_data_model_entity_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.entity/supplier-total-debt-and-debit-list-and-public-collection.data.model.entity");
let SupplierTotalDebtAndDebitListAndPublicCollectionService = class SupplierTotalDebtAndDebitListAndPublicCollectionService {
    constructor(supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity) {
        this.supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity = supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity;
    }
    async spGRpSupplierTotalDebtAndDebitListAndPublicCollection(supplierId, fromDate, toDate, keySearch, debtType, _offset, _limit) {
        let result = await this.supplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity.query("CALL sp_g_rp_supplier_total_debt_and_debit_list_and_public_collection(?,?,?,?,?,?,?,@total_to_pay_debt_amount, @total_receivable_debt_amount, @status, @message); SELECT @total_to_pay_debt_amount AS total_to_pay_debt_amount , @total_receivable_debt_amount AS total_receivable_debt_amount , @status AS status_code , @message AS message_error", [supplierId, fromDate, toDate, keySearch, debtType, _offset, _limit]);
        utils_store_procedure_exception_common_1.ExceptionStoreProcedure.validate(result);
        let data = new utils_store_procedure_result_output_common_1.StoreProcedureResultOutput().getResultOutputList(result);
        return data;
    }
};
SupplierTotalDebtAndDebitListAndPublicCollectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_total_debt_and_debit_list_and_public_collection_data_model_entity_1.SupplierTotalDebtAndDebitListAndPublicCollectionDataModelEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SupplierTotalDebtAndDebitListAndPublicCollectionService);
exports.SupplierTotalDebtAndDebitListAndPublicCollectionService = SupplierTotalDebtAndDebitListAndPublicCollectionService;
//# sourceMappingURL=supplier-total-debt-and-debit-list-and-public-collection.service.js.map