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
exports.WarehouseSessionTotalImportExportAmountReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const warehouse_session_total_import_export_amount_report_query_dto_1 = require("./warehouse-session-total-import-export-amount-report.dto/warehouse-session-total-import-export-amount-report.query.dto");
const warehouse_session_total_import_export_amount_report_response_1 = require("./warehouse-session-total-import-export-amount-report.response/warehouse-session-total-import-export-amount-report.response");
const warehouse_session_total_import_export_amount_report_service_1 = require("./warehouse-session-total-import-export-amount-report.service");
let WarehouseSessionTotalImportExportAmountReportController = class WarehouseSessionTotalImportExportAmountReportController {
    constructor(warehouseSessionTotalImportExportAmountReportService) {
        this.warehouseSessionTotalImportExportAmountReportService = warehouseSessionTotalImportExportAmountReportService;
    }
    async getWarehouseSessionTotalImportExportAmount(warehouseSessionTotalImportExportAmountReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.warehouseSessionTotalImportExportAmountReportService.spGetWarehouseSessionTotalImportExportAmount(warehouseSessionTotalImportExportAmountReportQueryDTO.restaurant_id, warehouseSessionTotalImportExportAmountReportQueryDTO.branch_id, warehouseSessionTotalImportExportAmountReportQueryDTO.material_category_type_parent_id, warehouseSessionTotalImportExportAmountReportQueryDTO.to_date_string, warehouseSessionTotalImportExportAmountReportQueryDTO.group_by_type);
        response.setData(new warehouse_session_total_import_export_amount_report_response_1.WarehouseSessionTotalImportExportAmountReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [warehouse_session_total_import_export_amount_report_query_dto_1.WarehouseSessionTotalImportExportAmountReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], WarehouseSessionTotalImportExportAmountReportController.prototype, "getWarehouseSessionTotalImportExportAmount", null);
WarehouseSessionTotalImportExportAmountReportController = __decorate([
    (0, common_1.Controller)('api/warehouse-session-total-import-export-amount-report'),
    __metadata("design:paramtypes", [warehouse_session_total_import_export_amount_report_service_1.WarehouseSessionTotalImportExportAmountReportService])
], WarehouseSessionTotalImportExportAmountReportController);
exports.WarehouseSessionTotalImportExportAmountReportController = WarehouseSessionTotalImportExportAmountReportController;
//# sourceMappingURL=warehouse-session-total-import-export-amount-report.controller.js.map