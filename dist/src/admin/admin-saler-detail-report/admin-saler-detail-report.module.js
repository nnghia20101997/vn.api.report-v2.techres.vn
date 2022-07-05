"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminSalerDetailReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSalerDetailReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_saler_detail_report_controller_1 = require("./admin-saler-detail-report.controller");
const admin_saler_detail_report_data_model_entity_1 = require("./admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity");
const admin_saler_detail_report_service_1 = require("./admin-saler-detail-report.service");
let AdminSalerDetailReportModule = AdminSalerDetailReportModule_1 = class AdminSalerDetailReportModule {
};
AdminSalerDetailReportModule = AdminSalerDetailReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_saler_detail_report_data_model_entity_1.AdminSalerDetailReportDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminSalerDetailReportModule_1,
        ],
        controllers: [admin_saler_detail_report_controller_1.AdminSalerDetailReportController],
        providers: [admin_saler_detail_report_service_1.AdminSalerDetailReportService],
        exports: [admin_saler_detail_report_service_1.AdminSalerDetailReportService],
    })
], AdminSalerDetailReportModule);
exports.AdminSalerDetailReportModule = AdminSalerDetailReportModule;
//# sourceMappingURL=admin-saler-detail-report.module.js.map