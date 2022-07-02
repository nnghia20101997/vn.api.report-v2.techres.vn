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
exports.AdminTopTenProductBestSellerDetailController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const admin_branch_report_query_dto_1 = require("./admin-branch-report.dto/admin-branch-report.query.dto");
const admin_branch_report_output_response_1 = require("./admin-branch-report.response/admin-branch-report.output.response");
const admin_branch_report_service_1 = require("./admin-branch-report.service");
let AdminTopTenProductBestSellerDetailController = class AdminTopTenProductBestSellerDetailController {
    constructor(adminBranchReportService) {
        this.adminBranchReportService = adminBranchReportService;
    }
    async spGRpAdminAdvertisingRevenue(adminBranchReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.adminBranchReportService.spGRpAdminBranchReport(adminBranchReportQueryDTO.status);
        response.setData(new admin_branch_report_output_response_1.AdminBranchReportOutputResponse(result.list, result.output));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_branch_report_query_dto_1.AdminBranchReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminTopTenProductBestSellerDetailController.prototype, "spGRpAdminAdvertisingRevenue", null);
AdminTopTenProductBestSellerDetailController = __decorate([
    (0, common_1.Controller)("/api/admin-branch-report"),
    __metadata("design:paramtypes", [admin_branch_report_service_1.AdminBranchReportService])
], AdminTopTenProductBestSellerDetailController);
exports.AdminTopTenProductBestSellerDetailController = AdminTopTenProductBestSellerDetailController;
//# sourceMappingURL=admin-branch-report.controller.js.map