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
exports.AdminSalerDetailReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_saler_detail_report_query_dto_1 = require("./admin-saler-detail-report.dto/admin-saler-detail-report.query.dto");
const admin_saler_detail_report_response_1 = require("./admin-saler-detail-report.response/admin-saler-detail-report.response");
const admin_saler_detail_report_service_1 = require("./admin-saler-detail-report.service");
let AdminSalerDetailReportController = class AdminSalerDetailReportController {
    constructor(adminSalerDetailReportService) {
        this.adminSalerDetailReportService = adminSalerDetailReportService;
    }
    async spGRpAdminSalerDetailReport(adminSalerDetailReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminSalerDetailReportService.spGRpAdminTopBestSalerReport(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminSalerDetailReportQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminSalerDetailReportQueryDTO.to_date));
        response.setData(new admin_saler_detail_report_response_1.AdminSalerDetailReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_saler_detail_report_query_dto_1.AdminSalerDetailReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminSalerDetailReportController.prototype, "spGRpAdminSalerDetailReport", null);
AdminSalerDetailReportController = __decorate([
    (0, common_1.Controller)("/api/admin-saler-detail-report"),
    __metadata("design:paramtypes", [admin_saler_detail_report_service_1.AdminSalerDetailReportService])
], AdminSalerDetailReportController);
exports.AdminSalerDetailReportController = AdminSalerDetailReportController;
//# sourceMappingURL=admin-saler-detail-report.controller.js.map