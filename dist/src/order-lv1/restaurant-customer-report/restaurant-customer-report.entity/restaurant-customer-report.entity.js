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
exports.RestaurantCustomerReportEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantCustomerReportEntity = class RestaurantCustomerReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RestaurantCustomerReportEntity.prototype, "report_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_customer_register", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_customer_save_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_customer_go_to_restaurant", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_customer_use_point", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_customer_receiving_gifts", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantCustomerReportEntity.prototype, "total_orders", void 0);
RestaurantCustomerReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestaurantCustomerReportEntity);
exports.RestaurantCustomerReportEntity = RestaurantCustomerReportEntity;
//# sourceMappingURL=restaurant-customer-report.entity.js.map