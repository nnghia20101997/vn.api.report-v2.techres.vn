"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminTopBestSalerReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminTopBestSalerReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_top_best_saler_report_controller_1 = require("./admin-top-best-saler-report.controller");
const admin_top_best_saler_report_data_model_entity_1 = require("./admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity");
const admin_top_best_saler_report_service_1 = require("./admin-top-best-saler-report.service");
let AdminTopBestSalerReportModule = AdminTopBestSalerReportModule_1 = class AdminTopBestSalerReportModule {
};
AdminTopBestSalerReportModule = AdminTopBestSalerReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_top_best_saler_report_data_model_entity_1.AdminTopBestSalerReportDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminTopBestSalerReportModule_1,
        ],
        controllers: [admin_top_best_saler_report_controller_1.AdminTopTenProductBestSellerDetailController],
        providers: [admin_top_best_saler_report_service_1.AdminTopBestSalerReportService],
        exports: [admin_top_best_saler_report_service_1.AdminTopBestSalerReportService]
    })
], AdminTopBestSalerReportModule);
exports.AdminTopBestSalerReportModule = AdminTopBestSalerReportModule;
//# sourceMappingURL=admin-top-best-saler-report.module.js.map