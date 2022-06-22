import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { Restaurant } from './restaurant.entity/restaurant.entity';
import { RestaurantDataModel } from './restaurant.entity/restaurant.data.model.entity';
import { Response } from 'express';
import { RestaurantDataModelDetailResponse } from './restaurant.response/restaurant.data.model.response';


@Controller('api/restaurant')
export class RestaurantController {
    constructor(
        private restaurantService: RestaurantService,
    ) { }


    @Get("")
    async getListRestaurant(@Query() status: number, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let restaurant : RestaurantDataModel[] = await this.restaurantService.getListRestaurants(0);
            response.setData(new RestaurantDataModelDetailResponse().mapToList(restaurant));
            return res.status(HttpStatus.OK).send(response);
    }

    @Get("/:id")
    async getDetailRestaurant(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let restaurant : RestaurantDataModel = await this.restaurantService.getDetailRestaurant(id);
            response.setData(new RestaurantDataModelDetailResponse(restaurant));
            return res.status(HttpStatus.OK).send(response);
    }
       
}
