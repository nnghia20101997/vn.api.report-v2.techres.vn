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
exports.SupplierOverviewReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const supplier_overview_report_response_1 = require("./supplier-overview-report.response/supplier-overview-report.response");
const supplier_overview_report_service_1 = require("./supplier-overview-report.service");
const supplier_overview_report_query_dto_1 = require("./supplier_overview-report.dto/supplier_overview-report.query.dto");
let SupplierOverviewReportController = class SupplierOverviewReportController {
    constructor(supplierOverviewReportService) {
        this.supplierOverviewReportService = supplierOverviewReportService;
    }
    async spGRpSupplierOverviewReport(supplierOverviewReportQueryDto, res) {
        let response = new utils_response_common_1.ResponseData();
        let supplierOverviewReport = await this.supplierOverviewReportService.spGRpSupplierOverviewReport(supplierOverviewReportQueryDto.supplier_id, supplierOverviewReportQueryDto.restaurant_id, supplierOverviewReportQueryDto.branch_id, supplierOverviewReportQueryDto.from_date, supplierOverviewReportQueryDto.to_date);
        response.setData(new supplier_overview_report_response_1.SupplierOverviewReportResponse(supplierOverviewReport));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_overview_report_query_dto_1.SupplierOverviewReportQueryDto, Object]),
    __metadata("design:returntype", Promise)
], SupplierOverviewReportController.prototype, "spGRpSupplierOverviewReport", null);
SupplierOverviewReportController = __decorate([
    (0, common_1.Controller)("api/supplier-overview-report"),
    __metadata("design:paramtypes", [supplier_overview_report_service_1.SupplierOverviewReportService])
], SupplierOverviewReportController);
exports.SupplierOverviewReportController = SupplierOverviewReportController;
//# sourceMappingURL=supplier-overview-report.controller.js.map