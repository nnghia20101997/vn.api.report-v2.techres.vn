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
exports.RestaurantInformationInAlolineReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_information_in_aloline_report_query_dto_1 = require("./restaurant-information-in-aloline-report.dto/restaurant-information-in-aloline-report.query.dto");
const restaurant_information_in_aloline_report_response_1 = require("./restaurant-information-in-aloline-report.response/restaurant-information-in-aloline-report.response");
const restaurant_information_in_aloline_report_service_1 = require("./restaurant-information-in-aloline-report.service");
let RestaurantInformationInAlolineReportController = class RestaurantInformationInAlolineReportController {
    constructor(restaurantInformationInAlolineReportService) {
        this.restaurantInformationInAlolineReportService = restaurantInformationInAlolineReportService;
    }
    async getRpRestaurantInformationInAloline(restaurantInformationInAlolineReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantInformationInAlolineReportService.spGetRpRestaurantInformationInAloline(restaurantInformationInAlolineReportQueryDTO.restaurant_id, restaurantInformationInAlolineReportQueryDTO.status, restaurantInformationInAlolineReportQueryDTO.is_office);
        response.setData(new restaurant_information_in_aloline_report_response_1.RestaurantInformationInAlolineReportResponse(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_information_in_aloline_report_query_dto_1.RestaurantInformationInAlolineReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantInformationInAlolineReportController.prototype, "getRpRestaurantInformationInAloline", null);
RestaurantInformationInAlolineReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-information-in-aloline-report'),
    __metadata("design:paramtypes", [restaurant_information_in_aloline_report_service_1.RestaurantInformationInAlolineReportService])
], RestaurantInformationInAlolineReportController);
exports.RestaurantInformationInAlolineReportController = RestaurantInformationInAlolineReportController;
//# sourceMappingURL=restaurant-information-in-aloline-report.controller.js.map