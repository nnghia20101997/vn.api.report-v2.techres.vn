import { Column } from "typeorm";

export class RestaurantSetting {

    @Column({ default: "" })
    email_smtp_host: string;

    @Column({ default: "" })
    email_smtp_port: string;

    @Column({ default: "" })
    email_smtp_from: string;

    @Column({ default: "" })
    email_smtp_username: string;

    @Column({ default: "" })
    email_smtp_password: string;

    @Column({ default: 0 })
    number_month_after_start_working_for_bonus_leave_day: number;

    @Column({ default: 0 })
    is_enable_tms: number;

    @Column({ default: 0 })
    is_enable_membership_card: number;

    @Column({ default: 0 })
    is_share_customer_on_app_party: number;

    @Column({ default: 0 })
    number_day_not_checkin_to_lock_account: number;

    @Column({ default: 0 })
    number_day_not_checkin_to_quit_job: number;

    @Column({ default: 0 })
    one_point_invite_customer_register_membership_to_money_amount: number;

    @Column({ default: 0 })
    point_bonus_for_employee_when_invite_customer_register_membership: number;

    @Column({ default: 0 })
    promotion_point_bonus_for_customer_when_register_membership_card: number;

    @Column({ default: 0 })
    maximum_percent_order_amount_to_promotion_point_allow_use_in_each_bill: number;

    @Column({ default: 0 })
    maximum_promotion_point_allow_use_in_each_bill: number;

    @Column({ default: 0 })
    minute_atfer_register_membershipcard_allow_to_use_promotion_point: number;

    @Column({ default: 0 })
    maximum_percent_order_amount_to_alo_point_allow_use_in_each_bill: number;

    @Column({ default: 0 })
    maximum_money_by_alo_point_allow_use_in_each_bill: number;

    @Column({ default: 0 })
    number_minute_allow_booking_before_open_order: number;

    @Column({ default: 0 })
    minimum_order_amount_to_claim_bonus_from_booking: number;


}