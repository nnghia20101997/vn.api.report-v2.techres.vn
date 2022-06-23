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
exports.RestaurantSetting = void 0;
const typeorm_1 = require("typeorm");
class RestaurantSetting {
}
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantSetting.prototype, "email_smtp_host", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantSetting.prototype, "email_smtp_port", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantSetting.prototype, "email_smtp_from", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantSetting.prototype, "email_smtp_username", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], RestaurantSetting.prototype, "email_smtp_password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "number_month_after_start_working_for_bonus_leave_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "is_enable_tms", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "is_enable_membership_card", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "is_share_customer_on_app_party", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "number_day_not_checkin_to_lock_account", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "number_day_not_checkin_to_quit_job", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "one_point_invite_customer_register_membership_to_money_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "point_bonus_for_employee_when_invite_customer_register_membership", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "promotion_point_bonus_for_customer_when_register_membership_card", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "maximum_percent_order_amount_to_promotion_point_allow_use_in_each_bill", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "maximum_promotion_point_allow_use_in_each_bill", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "minute_atfer_register_membershipcard_allow_to_use_promotion_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "maximum_percent_order_amount_to_alo_point_allow_use_in_each_bill", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "maximum_money_by_alo_point_allow_use_in_each_bill", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "number_minute_allow_booking_before_open_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RestaurantSetting.prototype, "minimum_order_amount_to_claim_bonus_from_booking", void 0);
exports.RestaurantSetting = RestaurantSetting;
//# sourceMappingURL=restaurant.setting.js.map