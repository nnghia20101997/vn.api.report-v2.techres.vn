"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSettingResponse = void 0;
class RestaurantSettingResponse {
    constructor(restaurantSetting) {
        this.email_smtp_host = restaurantSetting ? restaurantSetting.email_smtp_host : "";
        this.email_smtp_port = restaurantSetting ? restaurantSetting.email_smtp_port : '';
        this.email_smtp_from = restaurantSetting ? restaurantSetting.email_smtp_from : "";
        this.email_smtp_username = restaurantSetting ? restaurantSetting.email_smtp_username : "";
        this.email_smtp_password = restaurantSetting ? restaurantSetting.email_smtp_password : "";
        this.number_month_after_start_working_for_bonus_leave_day = restaurantSetting ? restaurantSetting.number_month_after_start_working_for_bonus_leave_day : 0;
        this.is_enable_tms = restaurantSetting ? restaurantSetting.is_enable_tms : 0;
        this.is_enable_membership_card = restaurantSetting ? restaurantSetting.is_enable_membership_card : 0;
        this.is_share_customer_on_app_party = restaurantSetting ? restaurantSetting.is_share_customer_on_app_party : 0;
        this.number_day_not_checkin_to_lock_account = restaurantSetting ? restaurantSetting.number_day_not_checkin_to_lock_account : 0;
        this.number_day_not_checkin_to_quit_job = restaurantSetting ? restaurantSetting.number_day_not_checkin_to_quit_job : 0;
        this.one_point_invite_customer_register_membership_to_money_amount = restaurantSetting ? restaurantSetting.one_point_invite_customer_register_membership_to_money_amount : 0;
        this.point_bonus_for_employee_when_invite_customer_register_membership = restaurantSetting ? restaurantSetting.point_bonus_for_employee_when_invite_customer_register_membership : 0;
        this.promotion_point_bonus_for_customer_when_register_membership_card = restaurantSetting ? restaurantSetting.promotion_point_bonus_for_customer_when_register_membership_card : 0;
        this.maximum_percent_order_amount_to_promotion_point_allow_use_in_each_bill = restaurantSetting ? restaurantSetting.maximum_percent_order_amount_to_promotion_point_allow_use_in_each_bill : 0;
        this.maximum_promotion_point_allow_use_in_each_bill = restaurantSetting ? restaurantSetting.maximum_promotion_point_allow_use_in_each_bill : 0;
        this.number_minute_allow_booking_before_open_order = restaurantSetting ? restaurantSetting.number_minute_allow_booking_before_open_order : 0;
        this.minimum_order_amount_to_claim_bonus_from_booking = restaurantSetting ? restaurantSetting.minimum_order_amount_to_claim_bonus_from_booking : 0;
    }
}
exports.RestaurantSettingResponse = RestaurantSettingResponse;
//# sourceMappingURL=restaurant-setting.response.js.map