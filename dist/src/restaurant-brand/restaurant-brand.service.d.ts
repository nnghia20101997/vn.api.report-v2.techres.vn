import { Repository } from 'typeorm';
import { RestaurantBrandDataModel } from './restaurant-brand.entity/restaurant-brand.data.model.entity';
export declare class RestaurantBrandService {
    private restaurantBrand;
    constructor(restaurantBrand: Repository<RestaurantBrandDataModel>);
    getListRestaurantBrand(restaurantId: number, status: number): Promise<RestaurantBrandDataModel[]>;
    getDetailRestaurantBrand(id: number): Promise<RestaurantBrandDataModel>;
}
