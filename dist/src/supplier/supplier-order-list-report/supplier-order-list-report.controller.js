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
exports.SupplierOrderListReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_pagination_common_1 = require("../../utils.common/utils.pagination.pagination/utils.pagination.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const express_1 = require("express");
const supplier_order_list_report_query_dto_1 = require("./supplier-order-list-report.dto/supplier-order-list-report.query.dto");
const supplier_order_list_report_response_1 = require("./supplier-order-list-report.response/supplier-order-list-report.response");
const supplier_order_list_report_service_1 = require("./supplier-order-list-report.service");
const supplier_order_total_record_list_report_response_1 = require("./supplier-order-list-report.response/supplier-order-total-record-list-report.response");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
let SupplierOrderListReportController = class SupplierOrderListReportController {
    constructor(supplierOrderListReportService) {
        this.supplierOrderListReportService = supplierOrderListReportService;
    }
    async spGRpSupplierOrderListReport(supplierOrderListReportQueryDto, res) {
        let response = new utils_response_common_1.ResponseData();
        let pagination = new utils_pagination_common_1.Pagination(supplierOrderListReportQueryDto.page, supplierOrderListReportQueryDto.limit);
        let supplierOrderListReport = await this.supplierOrderListReportService.spGRpSupplierOrderListReport(supplierOrderListReportQueryDto.supplier_id, utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierOrderListReportQueryDto.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(supplierOrderListReportQueryDto.to_date), supplierOrderListReportQueryDto.key_search, pagination);
        response.setData(new supplier_order_total_record_list_report_response_1.SupplierOrderTotalRecordReportResponse(supplierOrderListReport.total_record, pagination.limit, new supplier_order_list_report_response_1.SupplierOrderListReportResponse().mapToList(supplierOrderListReport.list)));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_order_list_report_query_dto_1.SupplierOrderListReportQueryDto, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SupplierOrderListReportController.prototype, "spGRpSupplierOrderListReport", null);
SupplierOrderListReportController = __decorate([
    (0, common_1.Controller)('api/supplier-order-list-report'),
    __metadata("design:paramtypes", [supplier_order_list_report_service_1.SupplierOrderListReportService])
], SupplierOrderListReportController);
exports.SupplierOrderListReportController = SupplierOrderListReportController;
//# sourceMappingURL=supplier-order-list-report.controller.js.map