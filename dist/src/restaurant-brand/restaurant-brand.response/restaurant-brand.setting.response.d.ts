import { RestaurantBrandSetting } from "../restaurant-brand.entity/restaurant-brand.setting";
export declare class RestaurantBrandSettingResponse {
    branch_type: number;
    open_time: number;
    close_time: number;
    late_minute_allow_in_month: number;
    end_working_day: number;
    total_monthly_off_day: number;
    total_yearly_off_day: number;
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
    constructor(restaurantBrandSetting?: RestaurantBrandSetting);
}
