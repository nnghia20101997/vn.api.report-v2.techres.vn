"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SupplierOverviewReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOverviewReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_overview_report_controller_1 = require("./supplier-overview-report.controller");
const supplier_overview_report_entity_1 = require("./supplier-overview-report.entity/supplier-overview-report.entity");
const supplier_overview_report_service_1 = require("./supplier-overview-report.service");
let SupplierOverviewReportModule = SupplierOverviewReportModule_1 = class SupplierOverviewReportModule {
};
SupplierOverviewReportModule = SupplierOverviewReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([supplier_overview_report_entity_1.SupplierOverviewReportEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            SupplierOverviewReportModule_1,
        ],
        controllers: [supplier_overview_report_controller_1.SupplierOverviewReportController],
        providers: [supplier_overview_report_service_1.SupplierOverviewReportService],
    })
], SupplierOverviewReportModule);
exports.SupplierOverviewReportModule = SupplierOverviewReportModule;
//# sourceMappingURL=supplier-overview-report.module.js.map