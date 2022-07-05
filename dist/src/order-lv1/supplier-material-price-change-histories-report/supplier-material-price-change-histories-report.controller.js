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
exports.SupplierMaterialPriceChangeHistoriesReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const supplier_material_price_change_histories_report_query_dto_1 = require("./supplier-material-price-change-histories-report.dto/supplier-material-price-change-histories-report.query.dto");
const supplier_material_price_change_histories_report_response_1 = require("./supplier-material-price-change-histories-report.response/supplier-material-price-change-histories-report.response");
const supplier_material_price_change_histories_report_service_1 = require("./supplier-material-price-change-histories-report.service");
let SupplierMaterialPriceChangeHistoriesReportController = class SupplierMaterialPriceChangeHistoriesReportController {
    constructor(supplierMaterialPriceChangeHistoriesReportService) {
        this.supplierMaterialPriceChangeHistoriesReportService = supplierMaterialPriceChangeHistoriesReportService;
    }
    async getWarehouseSessionTotalImportExportAmount(supplierMaterialPriceChangeHistoriesReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.supplierMaterialPriceChangeHistoriesReportService.spRpSupplierMaterialPriceChangeHistories(supplierMaterialPriceChangeHistoriesReportQueryDTO.restaurant_id, supplierMaterialPriceChangeHistoriesReportQueryDTO.restaurant_brand_id, supplierMaterialPriceChangeHistoriesReportQueryDTO.branch_id, supplierMaterialPriceChangeHistoriesReportQueryDTO.supplier_id, supplierMaterialPriceChangeHistoriesReportQueryDTO.from_date, supplierMaterialPriceChangeHistoriesReportQueryDTO.to_date, supplierMaterialPriceChangeHistoriesReportQueryDTO.supplier_material_id, supplierMaterialPriceChangeHistoriesReportQueryDTO.report_type);
        response.setData(new supplier_material_price_change_histories_report_response_1.SupplierMaterialPriceChangeHistoriesReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_material_price_change_histories_report_query_dto_1.SupplierMaterialPriceChangeHistoriesReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], SupplierMaterialPriceChangeHistoriesReportController.prototype, "getWarehouseSessionTotalImportExportAmount", null);
SupplierMaterialPriceChangeHistoriesReportController = __decorate([
    (0, common_1.Controller)('api/supplier-material-price-change-histories-report'),
    __metadata("design:paramtypes", [supplier_material_price_change_histories_report_service_1.SupplierMaterialPriceChangeHistoriesReportService])
], SupplierMaterialPriceChangeHistoriesReportController);
exports.SupplierMaterialPriceChangeHistoriesReportController = SupplierMaterialPriceChangeHistoriesReportController;
//# sourceMappingURL=supplier-material-price-change-histories-report.controller.js.map