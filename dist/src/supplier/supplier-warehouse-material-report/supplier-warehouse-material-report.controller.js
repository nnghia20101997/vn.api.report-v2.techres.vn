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
exports.SupplierWarehouseMaterialReportController = void 0;
const common_1 = require("@nestjs/common");
const supplier_warehouse_material_report_service_1 = require("./supplier-warehouse-material-report.service");
const express_1 = require("express");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const supplier_warehouse_material_report_dto_1 = require("./supplier-warehouse-material-report.dto/supplier-warehouse-material-report.dto");
const utils_pagination_common_1 = require("../../utils.common/utils.pagination.pagination/utils.pagination.common");
const supplier_warehouse_material_output_report_response_1 = require("./supplier-warehouse-material-report.response/supplier-warehouse-material-output-report.response");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
let SupplierWarehouseMaterialReportController = class SupplierWarehouseMaterialReportController {
    constructor(supplierWarehouseMaterialReportService) {
        this.supplierWarehouseMaterialReportService = supplierWarehouseMaterialReportService;
    }
    async spGRpSupplierWarehouseMaterialReport(supplierWarehouseMaterialReportDto, res) {
        let response = new utils_response_common_1.ResponseData();
        let pagination = new utils_pagination_common_1.Pagination(supplierWarehouseMaterialReportDto.page, supplierWarehouseMaterialReportDto.limit);
        let data = await this.supplierWarehouseMaterialReportService.spGRpSupplierWarehouseMaterialReport(supplierWarehouseMaterialReportDto.supplier_id, supplierWarehouseMaterialReportDto.material_categorie_id, utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierWarehouseMaterialReportDto.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierWarehouseMaterialReportDto.to_date), supplierWarehouseMaterialReportDto.key_search, pagination);
        response.setData(new supplier_warehouse_material_output_report_response_1.SupplierWarehouseMaterialOutputReportResponse(data.output, data.list));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_warehouse_material_report_dto_1.SupplierWarehouseMaterialReportDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SupplierWarehouseMaterialReportController.prototype, "spGRpSupplierWarehouseMaterialReport", null);
SupplierWarehouseMaterialReportController = __decorate([
    (0, common_1.Controller)('api/supplier-warehouse-material-report'),
    __metadata("design:paramtypes", [supplier_warehouse_material_report_service_1.SupplierWarehouseMaterialReportService])
], SupplierWarehouseMaterialReportController);
exports.SupplierWarehouseMaterialReportController = SupplierWarehouseMaterialReportController;
//# sourceMappingURL=supplier-warehouse-material-report.controller.js.map