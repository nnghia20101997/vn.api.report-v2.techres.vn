import { RestaurantBrandService } from './restaurant-brand.service';
import { Response } from 'express';
import { RestaurantBrandQueryDTO } from './restaurant-brand.dto/restaurant-brand.list.dto';
export declare class RestaurantBrandController {
    private restaurantBrandService;
    constructor(restaurantBrandService: RestaurantBrandService);
    getListRestaurant(restaurantBrandQueryDTO: RestaurantBrandQueryDTO, res: Response): Promise<any>;
    getDetailRestaurant(id: number, res: Response): Promise<any>;
}
