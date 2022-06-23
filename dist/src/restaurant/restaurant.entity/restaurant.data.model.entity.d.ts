import { BaseEntity } from 'typeorm';
import { RestaurantSetting } from './restaurant.setting';
export declare class RestaurantDataModel extends BaseEntity {
    id: number;
    restaurant_name: string;
    brand_name: string;
    name: string;
    email: string;
    phone: string;
    info: string;
    address: string;
    service_restaurant_level_id: number;
    is_done_setup: number;
    setting: RestaurantSetting;
    is_public: number;
    logo: string;
    banner: string;
    image_urls: string[];
    status: number;
    total_brands: number;
    created_at: Date;
    updated_at: Date;
}
