"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantInformationInAlolineReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantInformationInAlolineReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const restaurant_information_in_aloline_report_service_1 = require("./restaurant-information-in-aloline-report.service");
const restaurant_information_in_aloline_report_controller_1 = require("./restaurant-information-in-aloline-report.controller");
const restaurant_information_in_aloline_report_entity_1 = require("./restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity");
let RestaurantInformationInAlolineReportModule = RestaurantInformationInAlolineReportModule_1 = class RestaurantInformationInAlolineReportModule {
};
RestaurantInformationInAlolineReportModule = RestaurantInformationInAlolineReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_information_in_aloline_report_entity_1.RestaurantInformationInAlolineReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantInformationInAlolineReportModule_1
        ],
        providers: [restaurant_information_in_aloline_report_service_1.RestaurantInformationInAlolineReportService],
        controllers: [restaurant_information_in_aloline_report_controller_1.RestaurantInformationInAlolineReportController]
    })
], RestaurantInformationInAlolineReportModule);
exports.RestaurantInformationInAlolineReportModule = RestaurantInformationInAlolineReportModule;
//# sourceMappingURL=restaurant-information-in-aloline-report.module.js.map