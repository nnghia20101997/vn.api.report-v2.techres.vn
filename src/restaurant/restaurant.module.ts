import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Restaurant } from './restaurant.entity/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  RestaurantModule
],
  providers: [RestaurantService],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
