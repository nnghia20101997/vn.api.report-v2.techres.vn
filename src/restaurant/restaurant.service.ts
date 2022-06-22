import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity/restaurant.entity';
import { StoreProcedureResultInterface } from 'src/utils.common/utils.store-procedure-result.common/utils.store-procedure-result.interface.common';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { RestaurantDataModel } from './restaurant.entity/restaurant.data.model.entity';


@Injectable()
export class RestaurantService {

    constructor(
        @InjectRepository(Restaurant)
        private restaurant: Repository<Restaurant>
    ) { }

    async getListRestaurants(status : number): Promise<RestaurantDataModel[]> {
        let restaurant = await this.restaurant.query('CALL sp_get_list_restaurant(?, @status, @message); SELECT @status AS status , @message AS message',
        [
            status
        ]);
        console.log(restaurant);
        
        ExceptionStoreProcedure.validate(restaurant);
        let data : RestaurantDataModel[] = new StoreProcedureResult<RestaurantDataModel>().getResultList(restaurant)
        return data;
    }

    async getDetailRestaurant(id : number): Promise<RestaurantDataModel> {
        let restaurant = await this.restaurant.query('CALL sp_get_detail_restaurant(?,@status,@message); SELECT @status AS status , @message AS message',
        [
            id
        ]);
        ExceptionStoreProcedure.validate(restaurant);
        let data : RestaurantDataModel = new StoreProcedureResult<RestaurantDataModel>().getResultDetail(restaurant)
        return data;
    }
}
