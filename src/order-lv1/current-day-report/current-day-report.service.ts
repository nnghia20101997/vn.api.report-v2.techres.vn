import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { RestaurantRevenueByBranchReportEntity } from './current-day-report.entity/restaurant-revenue-by-branch-report.entity';
import { RestaurantRevenueCostCustomerByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-cost-customer-by-restaurant-brand-report.entity';
import { RestaurantRevenueDetailByRestaurantBrandReportEntity } from './current-day-report.entity/restaurant-revenue-detail-by-restaurant-brand-report.entity';

@Injectable()
export class CurrentDayReportService {
    @InjectRepository(RestaurantRevenueByBranchReportEntity)
    private restaurantRevenueByBranchReportEntity: Repository<RestaurantRevenueByBranchReportEntity>

    @InjectRepository(RestaurantRevenueCostCustomerByRestaurantBrandReportEntity)
    private restaurantRevenueCostCustomerByRestaurantBrandReportEntity: Repository<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity>

    @InjectRepository(RestaurantRevenueDetailByRestaurantBrandReportEntity)
    private restaurantRevenueDetailByRestaurantBrandReportEntity: Repository<RestaurantRevenueDetailByRestaurantBrandReportEntity>
    

     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantRevenueByBranch(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,  
        fromDateString : string , 
        toDateString : string
        ): Promise<RestaurantRevenueByBranchReportEntity[]> {
        let result = await this.restaurantRevenueByBranchReportEntity.query('CALL sp_get_rp_restaurant_revenue_by_branch(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueByBranchReportEntity[] = new StoreProcedureResult<RestaurantRevenueByBranchReportEntity>().getResultList(result)
        return data ;
    }


    /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param branchId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantRevenueCostCustomerByRestaurantBrand(
        restaurantId : number , 
        restaurantBrandId : number ,
        branchId : number ,  
        fromDateString : string , 
        toDateString : string
        ): Promise<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity> {
        let result = await this.restaurantRevenueCostCustomerByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_cost_customer_by_restaurant_brand(?,?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            branchId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueCostCustomerByRestaurantBrandReportEntity = new StoreProcedureResult<RestaurantRevenueCostCustomerByRestaurantBrandReportEntity>().getResultDetail(result)
        return data;
    }


     /**
   *@param restaurantId
   * @param restaurantBrandId
   * @param fromDateString
   * @param toDateString
   * @returns
   */
    async spGetRpRestaurantRevenueDetailByRestaurantBrand(
        restaurantId : number , 
        restaurantBrandId : number , 
        fromDateString : string , 
        toDateString : string
        ): Promise<RestaurantRevenueDetailByRestaurantBrandReportEntity> {
        let result = await this.restaurantRevenueDetailByRestaurantBrandReportEntity.query('CALL sp_get_rp_restaurant_revenue_detail_by_restaurant_brand(?,?,?,?,@status,@message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            fromDateString,
            toDateString
        ]);
        ExceptionStoreProcedure.validate(result);
        let data : RestaurantRevenueDetailByRestaurantBrandReportEntity = new StoreProcedureResult<RestaurantRevenueDetailByRestaurantBrandReportEntity>().getResultDetail(result)
        return data;
    }
}