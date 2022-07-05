"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminCustomerAlolineReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCustomerAlolineReportModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const admin_customer_aloline_report_controller_1 = require("./admin-customer-aloline-report.controller");
const admin_customer_aloline_report_entity_1 = require("./admin-customer-aloline-report.entity/admin-customer-aloline-report.entity");
const admin_customer_aloline_report_service_1 = require("./admin-customer-aloline-report.service");
let AdminCustomerAlolineReportModule = AdminCustomerAlolineReportModule_1 = class AdminCustomerAlolineReportModule {
};
AdminCustomerAlolineReportModule = AdminCustomerAlolineReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_customer_aloline_report_entity_1.AdminCustomerAlolineReportEntity]),
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            AdminCustomerAlolineReportModule_1,
        ],
        controllers: [admin_customer_aloline_report_controller_1.AdminCustomerAlolineReportController],
        providers: [admin_customer_aloline_report_service_1.AdminCustomerAlolineReportService],
        exports: [admin_customer_aloline_report_service_1.AdminCustomerAlolineReportService]
    })
], AdminCustomerAlolineReportModule);
exports.AdminCustomerAlolineReportModule = AdminCustomerAlolineReportModule;
//# sourceMappingURL=admin-customer-aloline-report.module.js.map