"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomerUsePointsReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUsePointsReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const customer_use_points_report_service_1 = require("./customer-use-points-report.service");
const customer_use_points_report_controller_1 = require("./customer-use-points-report.controller");
const customer_use_points_report_entity_1 = require("./customer-use-points-report.entity/customer-use-points-report.entity");
let CustomerUsePointsReportModule = CustomerUsePointsReportModule_1 = class CustomerUsePointsReportModule {
};
CustomerUsePointsReportModule = CustomerUsePointsReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customer_use_points_report_entity_1.CustomerUsePointsReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            CustomerUsePointsReportModule_1
        ],
        providers: [customer_use_points_report_service_1.CustomerUsePointsReportService],
        controllers: [customer_use_points_report_controller_1.CustomerUsePointsReportController]
    })
], CustomerUsePointsReportModule);
exports.CustomerUsePointsReportModule = CustomerUsePointsReportModule;
//# sourceMappingURL=customer-use-points-report.module.js.map