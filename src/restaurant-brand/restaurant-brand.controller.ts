import { Controller, Get, HttpStatus, Param, ParseIntPipe, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { RestaurantBrandDataModel } from './restaurant-brand.entity/restaurant-brand.data.model.entity';
import { RestaurantBrandDataModelResponse } from './restaurant-brand.response/restaurant-brand.response';
import { RestaurantBrandService } from './restaurant-brand.service';
import { Response } from 'express';
import { RestaurantBrandQueryDTO } from './restaurant-brand.dto/restaurant-brand.list.dto';


@Controller('api/restaurant-brand')
export class RestaurantBrandController {
    constructor(
        private restaurantBrandService: RestaurantBrandService,
    ) { }


    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getListRestaurant(@Query() restaurantBrandQueryDTO : RestaurantBrandQueryDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let restaurantBrand : RestaurantBrandDataModel[] = await this.restaurantBrandService.getListRestaurantBrand(restaurantBrandQueryDTO.restaurant_id,restaurantBrandQueryDTO.status);
            response.setData(new RestaurantBrandDataModelResponse().mapToList(restaurantBrand));
            return res.status(HttpStatus.OK).send(response);
    }
    @Get("/:id")
    async getDetailRestaurant(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let restaurant : RestaurantBrandDataModel = await this.restaurantBrandService.getDetailRestaurantBrand(id);
            response.setData(new RestaurantBrandDataModelResponse(restaurant));
            return res.status(HttpStatus.OK).send(response);
    }
}
