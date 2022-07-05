"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BusinessResultReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessResultReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const business_result_report_service_1 = require("./business-result-report.service");
const business_result_report_controller_1 = require("./business-result-report.controller");
const restaurant_result_business_and_profit_report_entity_1 = require("./business-result-report.entity/restaurant-result-business-and-profit-report.entity");
const restaurant_revenue_cost_summary_report_entity_1 = require("./business-result-report.entity/restaurant-revenue-cost-summary-report.entity");
let BusinessResultReportModule = BusinessResultReportModule_1 = class BusinessResultReportModule {
};
BusinessResultReportModule = BusinessResultReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                restaurant_result_business_and_profit_report_entity_1.RestaurantResultBusinessAndProfitReportEntity,
                restaurant_revenue_cost_summary_report_entity_1.RestaurantRevenueCostSummaryReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            BusinessResultReportModule_1
        ],
        providers: [business_result_report_service_1.BusinessResultReportService],
        controllers: [business_result_report_controller_1.BusinessResultReportController]
    })
], BusinessResultReportModule);
exports.BusinessResultReportModule = BusinessResultReportModule;
//# sourceMappingURL=business-result-report.module.js.map