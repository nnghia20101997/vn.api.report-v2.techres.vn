"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomerAccumulatePointsReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAccumulatePointsReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const customer_accumulate_points_report_service_1 = require("./customer-accumulate-points-report.service");
const customer_accumulate_points_report_controller_1 = require("./customer-accumulate-points-report.controller");
const customer_accumulate_points_report_entity_1 = require("./customer-accumulate-points-report.entity/customer-accumulate-points-report.entity");
let CustomerAccumulatePointsReportModule = CustomerAccumulatePointsReportModule_1 = class CustomerAccumulatePointsReportModule {
};
CustomerAccumulatePointsReportModule = CustomerAccumulatePointsReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customer_accumulate_points_report_entity_1.CustomerAccumulatePointsReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            CustomerAccumulatePointsReportModule_1
        ],
        providers: [customer_accumulate_points_report_service_1.CustomerAccumulatePointsReportService],
        controllers: [customer_accumulate_points_report_controller_1.CustomerAccumulatePointsReportController]
    })
], CustomerAccumulatePointsReportModule);
exports.CustomerAccumulatePointsReportModule = CustomerAccumulatePointsReportModule;
//# sourceMappingURL=customer-accumulate-points-report.module.js.map