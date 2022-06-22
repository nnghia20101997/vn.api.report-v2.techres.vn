import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantBrandDataModel } from './restaurant-brand.entity/restaurant-brand.data.model.entity';

@Injectable()
export class RestaurantBrandService {
    constructor(
        @InjectRepository(RestaurantBrandDataModel)
        private restaurantBrand: Repository<RestaurantBrandDataModel>
    ) { }

    async getListRestaurantBrand(restaurantId : number , status : number): Promise<RestaurantBrandDataModel[]> {
        let restaurantBrand = await this.restaurantBrand.query('CALL sp_get_list_restaurant_brands(?,?, @status, @message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            status
        ]);
        
        ExceptionStoreProcedure.validate(restaurantBrand);
        let data : RestaurantBrandDataModel[] = new StoreProcedureResult<RestaurantBrandDataModel>().getResultList(restaurantBrand)
        return data;
    }

    async getDetailRestaurantBrand(id : number): Promise<RestaurantBrandDataModel> {
        let restaurantBrand = await this.restaurantBrand.query('CALL sp_get_detail_restaurant_brand(?,@status,@message); SELECT @status AS status , @message AS message',
        [
            id
        ]);
        ExceptionStoreProcedure.validate(restaurantBrand);
        let data : RestaurantBrandDataModel = new StoreProcedureResult<RestaurantBrandDataModel>().getResultDetail(restaurantBrand)
        return data;
    }
}
