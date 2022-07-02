import { Repository } from 'typeorm';
import { RestaurantDataModel } from './restaurant.entity/restaurant.data.model.entity';
import { Restaurant } from './restaurant.entity/restaurant.entity';
export declare class RestaurantService {
    private restaurant;
    constructor(restaurant: Repository<Restaurant>);
    getListRestaurants(status: number): Promise<RestaurantDataModel[]>;
    getDetailRestaurant(id: number): Promise<RestaurantDataModel>;
}
