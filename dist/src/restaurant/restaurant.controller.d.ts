import { RestaurantService } from './restaurant.service';
import { Response } from 'express';
export declare class RestaurantController {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    getListRestaurant(status: number, res: Response): Promise<any>;
    getDetailRestaurant(id: number, res: Response): Promise<any>;
}
