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
exports.AdminBestSalerGravityReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_format_time_common_1 = require("../../utils.common/utils.format-time.common/utils.format-time.common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_best_saler_gravity_report_query_dto_1 = require("./admin-best-saler-gravity-report.dto/admin-best-saler-gravity-report.query.dto");
const admin_best_saler_gravity_report_response_1 = require("./admin-best-saler-gravity-report.response/admin-best-saler-gravity-report.response");
const admin_best_saler_gravity_report_service_1 = require("./admin-best-saler-gravity-report.service");
let AdminBestSalerGravityReportController = class AdminBestSalerGravityReportController {
    constructor(adminBestSalerGravityReportService) {
        this.adminBestSalerGravityReportService = adminBestSalerGravityReportService;
    }
    async spGRpAdminBestSalerGravityReport(adminBestSalerGravityReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminBestSalerGravityReportService.spGRpAdminBestSalerGravityReport(utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminBestSalerGravityReportQueryDTO.from_date), utils_format_time_common_1.UtilsDate.formatDateInsertDatabase(adminBestSalerGravityReportQueryDTO.to_date));
        response.setData(new admin_best_saler_gravity_report_response_1.AdminBestSalerGravityReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_best_saler_gravity_report_query_dto_1.AdminBestSalerGravityReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminBestSalerGravityReportController.prototype, "spGRpAdminBestSalerGravityReport", null);
AdminBestSalerGravityReportController = __decorate([
    (0, common_1.Controller)("/api/admin-best-saler-gravity-report"),
    __metadata("design:paramtypes", [admin_best_saler_gravity_report_service_1.AdminBestSalerGravityReportService])
], AdminBestSalerGravityReportController);
exports.AdminBestSalerGravityReportController = AdminBestSalerGravityReportController;
//# sourceMappingURL=admin-best-saler-gravity-report.controller.js.map