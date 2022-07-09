"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminLocationWithBestSalesResultsReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLocationWithBestSalesResultsReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_location_with_best_sales_results_report_controller_1 = require("./admin-location-with-best-sales-results-report.controller");
const admin_location_with_best_sales_results_report_data_model_entity_1 = require("./admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity");
const admin_location_with_best_sales_results_report_service_1 = require("./admin-location-with-best-sales-results-report.service");
let AdminLocationWithBestSalesResultsReportModule = AdminLocationWithBestSalesResultsReportModule_1 = class AdminLocationWithBestSalesResultsReportModule {
};
AdminLocationWithBestSalesResultsReportModule = AdminLocationWithBestSalesResultsReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_location_with_best_sales_results_report_data_model_entity_1.AdminLocationWithBestSalesResultsReportDataModelEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminLocationWithBestSalesResultsReportModule_1,
        ],
        controllers: [admin_location_with_best_sales_results_report_controller_1.AdminLocationWithBestSalesResultsReportController],
        providers: [admin_location_with_best_sales_results_report_service_1.AdminLocationWithBestSalesResultsReportService],
        exports: [admin_location_with_best_sales_results_report_service_1.AdminLocationWithBestSalesResultsReportService],
    })
], AdminLocationWithBestSalesResultsReportModule);
exports.AdminLocationWithBestSalesResultsReportModule = AdminLocationWithBestSalesResultsReportModule;
//# sourceMappingURL=admin-location-with-best-sales-results-report.module.js.map