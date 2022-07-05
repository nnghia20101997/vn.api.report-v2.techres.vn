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
exports.RestaurantEmployeeTargetReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const restaurant_employee_target_report_query_dto_1 = require("./restaurant-employee-target-report.dto/restaurant-employee-target-report.query.dto");
const restaurant_employee_target_report_response_1 = require("./restaurant-employee-target-report.response/restaurant-employee-target-report.response");
const restaurant_employee_target_report_service_1 = require("./restaurant-employee-target-report.service");
let RestaurantEmployeeTargetReportController = class RestaurantEmployeeTargetReportController {
    constructor(restaurantEmployeeTargetReportService) {
        this.restaurantEmployeeTargetReportService = restaurantEmployeeTargetReportService;
    }
    async getRpRestaurantEmployeeTarget(restaurantEmployeeTargetReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.restaurantEmployeeTargetReportService.spGetRpRestaurantEmployeeTarget(restaurantEmployeeTargetReportQueryDTO.restaurant_id, restaurantEmployeeTargetReportQueryDTO.restaurant_brand_id, restaurantEmployeeTargetReportQueryDTO.branch_id, restaurantEmployeeTargetReportQueryDTO.from_date_string, restaurantEmployeeTargetReportQueryDTO.to_date_string);
        response.setData(new restaurant_employee_target_report_response_1.RestaurantEmployeeTargetReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_employee_target_report_query_dto_1.RestaurantEmployeeTargetReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], RestaurantEmployeeTargetReportController.prototype, "getRpRestaurantEmployeeTarget", null);
RestaurantEmployeeTargetReportController = __decorate([
    (0, common_1.Controller)('api/restaurant-employee-target-report'),
    __metadata("design:paramtypes", [restaurant_employee_target_report_service_1.RestaurantEmployeeTargetReportService])
], RestaurantEmployeeTargetReportController);
exports.RestaurantEmployeeTargetReportController = RestaurantEmployeeTargetReportController;
//# sourceMappingURL=restaurant-employee-target-report.controller.js.map