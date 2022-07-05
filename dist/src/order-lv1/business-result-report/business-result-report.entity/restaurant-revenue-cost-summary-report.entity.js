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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRevenueCostSummaryReportEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantRevenueCostSummaryReportEntity = class RestaurantRevenueCostSummaryReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "restaurant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "restaurant_brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantRevenueCostSummaryReportEntity.prototype, "report_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "total_amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "addition_fee_reason_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantRevenueCostSummaryReportEntity.prototype, "addition_fee_reason_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantRevenueCostSummaryReportEntity.prototype, "addition_fee_reason_content", void 0);
RestaurantRevenueCostSummaryReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestaurantRevenueCostSummaryReportEntity);
exports.RestaurantRevenueCostSummaryReportEntity = RestaurantRevenueCostSummaryReportEntity;
//# sourceMappingURL=restaurant-revenue-cost-summary-report.entity.js.map