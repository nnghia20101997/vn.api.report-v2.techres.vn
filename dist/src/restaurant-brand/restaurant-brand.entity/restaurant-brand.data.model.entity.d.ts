import { BaseEntity } from "typeorm";
export declare class RestaurantBrandDataModel extends BaseEntity {
    id: number;
    restaurant_id: number;
    customer_partner_id: number;
    name: string;
    logo_url: string;
    banner: string;
    description: string;
    setting: string;
    restaurant_brand_business_type: string;
    status: number;
    total_branches: number;
    service_restaurant_level_id: number;
    service_restaurant_level_type: number;
    created_at: Date;
    updated_at: Date;
}
