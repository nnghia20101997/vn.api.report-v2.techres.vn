"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMembershipCardLevelReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_membership_card_level_report_query_dto_1 = require("./restaurant-membership-card-level-report.dto/restaurant-membership-card-level-report.query.dto");
const restaurant_membership_card_level_report_response_1 = require("./restaurant-membership-card-level-report.response/restaurant-membership-card-level-report.response");
const restaurant_membership_card_level_report_service_1 = require("./restaurant-membership-card-level-report.service");
let RestaurantMembershipCardLevelReportController = class RestaurantMembershipCardLevelReportController {
    constructor(restaurantMembershipCardLevelReportService) {
        this.restaurantMembershipCardLevelReportService = restaurantMembershipCardLevelReportService;
    }
    async getRpRestaurantMembershipCardLevel(restaurantMembershipCardLevelReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantMembershipCardLevelReportService.spGetRpRestaurantMembershipCardLevel(restaurantMembershipCardLevelReportQueryDTO.restaurant_id);
        response.setData(new restaurant_membership_card_level_report_response_1.RestaurantMembershipCardLevelReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_membership_card_level_report_query_dto_1.RestaurantMembershipCardLevelReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantMembershipCardLevelReportController.prototype, "getRpRestaurantMembershipCardLevel", null);
RestaurantMembershipCardLevelReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-membership-card-level-report'),
    __metadata("design:paramtypes", [restaurant_membership_card_level_report_service_1.RestaurantMembershipCardLevelReportService])
], RestaurantMembershipCardLevelReportController);
exports.RestaurantMembershipCardLevelReportController = RestaurantMembershipCardLevelReportController;
//# sourceMappingURL=restaurant-membership-card-level-report.controller.js.map