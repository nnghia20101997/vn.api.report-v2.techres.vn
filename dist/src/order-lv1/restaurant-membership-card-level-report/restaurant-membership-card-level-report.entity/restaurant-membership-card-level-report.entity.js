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
exports.RestaurantMembershipCardLevelReportEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantMembershipCardLevelReportEntity = class RestaurantMembershipCardLevelReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], RestaurantMembershipCardLevelReportEntity.prototype, "restaurant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantMembershipCardLevelReportEntity.prototype, "membership_card_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantMembershipCardLevelReportEntity.prototype, "color_hex_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RestaurantMembershipCardLevelReportEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RestaurantMembershipCardLevelReportEntity.prototype, "total_customer_member", void 0);
RestaurantMembershipCardLevelReportEntity = __decorate([
    (0, typeorm_1.Entity)()
], RestaurantMembershipCardLevelReportEntity);
exports.RestaurantMembershipCardLevelReportEntity = RestaurantMembershipCardLevelReportEntity;
//# sourceMappingURL=restaurant-membership-card-level-report.entity.js.map