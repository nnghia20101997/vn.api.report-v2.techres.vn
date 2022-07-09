"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantEmployeeTargetReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantEmployeeTargetReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const restaurant_employee_target_report_service_1 = require("./restaurant-employee-target-report.service");
const restaurant_employee_target_report_controller_1 = require("./restaurant-employee-target-report.controller");
const restaurant_employee_target_report_entity_1 = require("./restaurant-employee-target-report.entity/restaurant-employee-target-report.entity");
let RestaurantEmployeeTargetReportModule = RestaurantEmployeeTargetReportModule_1 = class RestaurantEmployeeTargetReportModule {
};
RestaurantEmployeeTargetReportModule = RestaurantEmployeeTargetReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_employee_target_report_entity_1.RestaurantEmployeeTargetReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantEmployeeTargetReportModule_1
        ],
        providers: [restaurant_employee_target_report_service_1.RestaurantEmployeeTargetReportService],
        controllers: [restaurant_employee_target_report_controller_1.RestaurantEmployeeTargetReportController]
    })
], RestaurantEmployeeTargetReportModule);
exports.RestaurantEmployeeTargetReportModule = RestaurantEmployeeTargetReportModule;
//# sourceMappingURL=restaurant-employee-target-report.module.js.map