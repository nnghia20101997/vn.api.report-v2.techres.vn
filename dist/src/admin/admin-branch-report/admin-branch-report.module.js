"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminBranchReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminBranchReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_branch_report_controller_1 = require("./admin-branch-report.controller");
const admin_branch_report_entity_1 = require("./admin-branch-report.entity/admin-branch-report.entity");
const admin_branch_report_service_1 = require("./admin-branch-report.service");
let AdminBranchReportModule = AdminBranchReportModule_1 = class AdminBranchReportModule {
};
AdminBranchReportModule = AdminBranchReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_branch_report_entity_1.AdminBranchReporDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminBranchReportModule_1,
        ],
        controllers: [admin_branch_report_controller_1.AdminTopTenProductBestSellerDetailController],
        providers: [admin_branch_report_service_1.AdminBranchReportService],
        exports: [admin_branch_report_service_1.AdminBranchReportService]
    })
], AdminBranchReportModule);
exports.AdminBranchReportModule = AdminBranchReportModule;
//# sourceMappingURL=admin-branch-report.module.js.map