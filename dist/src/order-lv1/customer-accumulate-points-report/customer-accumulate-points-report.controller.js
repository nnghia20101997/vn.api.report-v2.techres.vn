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
exports.CustomerAccumulatePointsReportController = void 0;
const common_1 = require("@nestjs/common");
const utils_response_common_1 = require("../../utils.common/utils.response.common/utils.response.common");
const customer_accumulate_points_report_query_dto_1 = require("./customer-accumulate-points-report.dto/customer-accumulate-points-report.query.dto");
const customer_accumulate_points_report_response_1 = require("./customer-accumulate-points-report.response/customer-accumulate-points-report.response");
const customer_accumulate_points_report_service_1 = require("./customer-accumulate-points-report.service");
let CustomerAccumulatePointsReportController = class CustomerAccumulatePointsReportController {
    constructor(customerAccumulatePointsReportService) {
        this.customerAccumulatePointsReportService = customerAccumulatePointsReportService;
    }
    async getRpCustomerAccumulatePoints(customerAccumulatePointsReportQueryDTO, res) {
        let response = new utils_response_common_1.ResponseData();
        let result = await this.customerAccumulatePointsReportService.spGetRpCustomerAccumulatePoints(customerAccumulatePointsReportQueryDTO.restaurant_id, customerAccumulatePointsReportQueryDTO.restaurant_brand_id, customerAccumulatePointsReportQueryDTO.branch_id, customerAccumulatePointsReportQueryDTO.from_date_string, customerAccumulatePointsReportQueryDTO.to_date_string, customerAccumulatePointsReportQueryDTO.limit, customerAccumulatePointsReportQueryDTO.offset);
        response.setData(new customer_accumulate_points_report_response_1.CustomerAccumulatePointsReportResponse().mapToList(result));
        return res.status(common_1.HttpStatus.OK).send(response);
    }
};
__decorate([
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_accumulate_points_report_query_dto_1.CustomerAccumulatePointsReportQueryDTO, Object]),
    __metadata("design:returntype", Promise)
], CustomerAccumulatePointsReportController.prototype, "getRpCustomerAccumulatePoints", null);
CustomerAccumulatePointsReportController = __decorate([
    (0, common_1.Controller)('api/customer-accumulate-points-report'),
    __metadata("design:paramtypes", [customer_accumulate_points_report_service_1.CustomerAccumulatePointsReportService])
], CustomerAccumulatePointsReportController);
exports.CustomerAccumulatePointsReportController = CustomerAccumulatePointsReportController;
//# sourceMappingURL=customer-accumulate-points-report.controller.js.map