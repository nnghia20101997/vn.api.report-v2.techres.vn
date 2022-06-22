import { RestaurantBrandSetting } from "../restaurant-brand.entity/restaurant-brand.setting";

export class RestaurantBrandSettingResponse {
    branch_type: number;
    open_time: number;
    close_time: number;
    late_minute_allow_in_month: number;
    end_working_day: number;
    total_monthly_off_day: number;
    total_yearly_off_day: number
    bonus_working_day: number;
    punish_working_day_in_minute: number;
    punish_not_checkout: number;
    maximum_advance_salary_percent: number;
    is_require_update_customer_slot_in_order: number;
    min_distance_checkin: number;
    hour_to_take_report: number;
    is_allow_print_temporary_bill: number;
    is_hide_total_amount_before_complete_bill: number;
    is_print_bill_logo: number;
    is_print_bill_on_mobile_app: number;
    is_paid_user: number;
    is_print_kichen_bill_on_mobile_app: number;

    constructor(restaurantBrandSetting?: RestaurantBrandSetting) {
        this.branch_type = restaurantBrandSetting ? + restaurantBrandSetting.branch_type : 0;
        this.open_time = restaurantBrandSetting ? + restaurantBrandSetting.open_time : 0;
        this.close_time = restaurantBrandSetting ? + restaurantBrandSetting.close_time : 0;
        this.late_minute_allow_in_month = restaurantBrandSetting ? + restaurantBrandSetting.late_minute_allow_in_month : 0;
        this.end_working_day = restaurantBrandSetting ? + restaurantBrandSetting.end_working_day : 0;
        this.total_monthly_off_day = restaurantBrandSetting ? + restaurantBrandSetting.total_monthly_off_day : 0;
        this.total_yearly_off_day = restaurantBrandSetting ? + restaurantBrandSetting.total_yearly_off_day : 0;
        this.bonus_working_day = restaurantBrandSetting ? + restaurantBrandSetting.bonus_working_day : 0;
        this.punish_working_day_in_minute = restaurantBrandSetting ? + restaurantBrandSetting.punish_working_day_in_minute : 0;
        this.punish_not_checkout = restaurantBrandSetting ? + restaurantBrandSetting.punish_not_checkout : 0;
        this.maximum_advance_salary_percent = restaurantBrandSetting ? + restaurantBrandSetting.maximum_advance_salary_percent : 0;
        this.is_require_update_customer_slot_in_order = restaurantBrandSetting ? 0 : 0;
        this.min_distance_checkin = restaurantBrandSetting ? + restaurantBrandSetting.min_distance_checkin : 0;
        this.hour_to_take_report = restaurantBrandSetting ? + restaurantBrandSetting.hour_to_take_report : 0;
        this.is_allow_print_temporary_bill = restaurantBrandSetting ? + restaurantBrandSetting.is_allow_print_temporary_bill : 0;
        this.is_hide_total_amount_before_complete_bill = restaurantBrandSetting ? + restaurantBrandSetting.is_hide_total_amount_before_complete_bill : 0;
        this.is_print_bill_logo = restaurantBrandSetting ? + restaurantBrandSetting.is_print_bill_logo : 0;
        this.is_print_bill_on_mobile_app = restaurantBrandSetting ? + restaurantBrandSetting.is_print_bill_on_mobile_app : 0;
        this.is_paid_user = restaurantBrandSetting ? + restaurantBrandSetting.is_paid_user : 0;
        this.is_print_kichen_bill_on_mobile_app = restaurantBrandSetting ? + restaurantBrandSetting.is_print_kichen_bill_on_mobile_app : 0;
    }
}