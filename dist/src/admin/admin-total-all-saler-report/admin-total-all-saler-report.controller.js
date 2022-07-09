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
exports.AdminTotalAllSalerReportController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_total_all_saler_report_query_dto_1 = require("./admin-total-all-saler-report.dto/admin-total-all-saler-report.query.dto");
const admin_total_all_saler_report_response_1 = require("./admin-total-all-saler-report.response/admin-total-all-saler-report.response");
const admin_total_all_saler_report_service_1 = require("./admin-total-all-saler-report.service");
let AdminTotalAllSalerReportController = class AdminTotalAllSalerReportController {
    constructor(adminTotalAllSalerReportService) {
        this.adminTotalAllSalerReportService = adminTotalAllSalerReportService;
    }
    async spGRpAdminTotalAllSalerReport(adminTotalAllSalerReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminTotalAllSalerReportService.spGRpAdminTotalAllSalerReport(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminTotalAllSalerReportQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminTotalAllSalerReportQueryDTO.to_date));
        response.setData(new admin_total_all_saler_report_response_1.AdminTotalAllSalerReportResponse(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_total_all_saler_report_query_dto_1.AdminTotalAllSalerReportQueryDTO, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdminTotalAllSalerReportController.prototype, "spGRpAdminTotalAllSalerReport", null);
AdminTotalAllSalerReportController = __decorate([
    (0, common_1.Controller)("/api/admin-total-all-saler-report"),
    __metadata("design:paramtypes", [admin_total_all_saler_report_service_1.AdminTotalAllSalerReportService])
], AdminTotalAllSalerReportController);
exports.AdminTotalAllSalerReportController = AdminTotalAllSalerReportController;
//# sourceMappingURL=admin-total-all-saler-report.controller.js.map