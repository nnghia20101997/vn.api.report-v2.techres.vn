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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierTotalDebtAndDebitListAndPublicCollectionController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const supplier_total_debt_and_debit_list_and_public_collection_query_dto_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.query.dto/supplier-total-debt-and-debit-list-and-public-collection.query.dto");
const supplier_total_debt_and_debit_list_and_public_collection_response_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.response/supplier-total-debt-and-debit-list-and-public-collection.response");
const supplier_total_debt_and_debit_list_and_public_collection_service_1 = require("./supplier-total-debt-and-debit-list-and-public-collection.service");
let SupplierTotalDebtAndDebitListAndPublicCollectionController = class SupplierTotalDebtAndDebitListAndPublicCollectionController {
    constructor(SupplierTotalDebtAndDebitListAndPublicCollectionService) {
        this.SupplierTotalDebtAndDebitListAndPublicCollectionService = SupplierTotalDebtAndDebitListAndPublicCollectionService;
    }
    async spGRpSupplierTotalDebtAndDebitListAndPublicCollection(supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.SupplierTotalDebtAndDebitListAndPublicCollectionService.spGRpSupplierTotalDebtAndDebitListAndPublicCollection(supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.supplier_id, utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.to_date), supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.key_search, supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.debt_type, supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.offset, supplierTotalDebtAndDebitListAndPublicCollectionQueryDTO.limit);
        response.setData(new supplier_total_debt_and_debit_list_and_public_collection_response_1.SupplierTotalDebtAndDebitListAndPublicCollectionResponse(result.list, result.output));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_total_debt_and_debit_list_and_public_collection_query_dto_1.SupplierTotalDebtAndDebitListAndPublicCollectionQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SupplierTotalDebtAndDebitListAndPublicCollectionController.prototype, "spGRpSupplierTotalDebtAndDebitListAndPublicCollection", null);
SupplierTotalDebtAndDebitListAndPublicCollectionController = __decorate([
    (0, common_1.Controller)("/api/supplier-total-debt-and-debit-list-and-public-collection"),
    __metadata("design:paramtypes", [supplier_total_debt_and_debit_list_and_public_collection_service_1.SupplierTotalDebtAndDebitListAndPublicCollectionService])
], SupplierTotalDebtAndDebitListAndPublicCollectionController);
exports.SupplierTotalDebtAndDebitListAndPublicCollectionController = SupplierTotalDebtAndDebitListAndPublicCollectionController;
//# sourceMappingURL=supplier-total-debt-and-debit-list-and-public-collection.controller.js.map