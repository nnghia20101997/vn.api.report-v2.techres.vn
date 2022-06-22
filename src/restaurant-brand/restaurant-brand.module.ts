import { Module } from '@nestjs/common';
import { RestaurantBrandService } from './restaurant-brand.service';
import { RestaurantBrandController } from './restaurant-brand.controller';
import { RestaurantBrandDataModel } from './restaurant-brand.entity/restaurant-brand.data.model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantBrandDataModel]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantBrandModule
],
  providers: [RestaurantBrandService],
  controllers: [RestaurantBrandController]
})
export class RestaurantBrandModule {}
