"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantRevenueByCategoryReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueByCategoryReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const restaurant_revenue_by_category_report_service_1 = require("./restaurant-revenue-by-category-report.service");
const restaurant_revenue_by_category_report_controller_1 = require("./restaurant-revenue-by-category-report.controller");
const restaurant_revenue_by_category_report_entity_1 = require("./restaurant-revenue-by-category-report.entity/restaurant-revenue-by-category-report.entity");
let RestaurantRevenueByCategoryReportModule = RestaurantRevenueByCategoryReportModule_1 = class RestaurantRevenueByCategoryReportModule {
};
RestaurantRevenueByCategoryReportModule = RestaurantRevenueByCategoryReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_revenue_by_category_report_entity_1.RestaurantRevenueByCategoryReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantRevenueByCategoryReportModule_1
        ],
        providers: [restaurant_revenue_by_category_report_service_1.RestaurantRevenueByCategoryReportService],
        controllers: [restaurant_revenue_by_category_report_controller_1.RestaurantRevenueByCategoryReportController]
    })
], RestaurantRevenueByCategoryReportModule);
exports.RestaurantRevenueByCategoryReportModule = RestaurantRevenueByCategoryReportModule;
//# sourceMappingURL=restaurant-revenue-by-category-report.module.js.map