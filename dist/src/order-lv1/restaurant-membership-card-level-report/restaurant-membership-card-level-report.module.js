"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RestaurantMembershipCardLevelReportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMembershipCardLevelReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const restaurant_membership_card_level_report_service_1 = require("./restaurant-membership-card-level-report.service");
const restaurant_membership_card_level_report_controller_1 = require("./restaurant-membership-card-level-report.controller");
const restaurant_membership_card_level_report_entity_1 = require("./restaurant-membership-card-level-report.entity/restaurant-membership-card-level-report.entity");
let RestaurantMembershipCardLevelReportModule = RestaurantMembershipCardLevelReportModule_1 = class RestaurantMembershipCardLevelReportModule {
};
RestaurantMembershipCardLevelReportModule = RestaurantMembershipCardLevelReportModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([restaurant_membership_card_level_report_entity_1.RestaurantMembershipCardLevelReportEntity
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_TOKEN,
            }),
            RestaurantMembershipCardLevelReportModule_1
        ],
        providers: [restaurant_membership_card_level_report_service_1.RestaurantMembershipCardLevelReportService],
        controllers: [restaurant_membership_card_level_report_controller_1.RestaurantMembershipCardLevelReportController]
    })
], RestaurantMembershipCardLevelReportModule);
exports.RestaurantMembershipCardLevelReportModule = RestaurantMembershipCardLevelReportModule;
//# sourceMappingURL=restaurant-membership-card-level-report.module.js.map