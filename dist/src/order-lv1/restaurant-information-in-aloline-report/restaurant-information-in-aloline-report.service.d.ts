import { RestaurantInformationInAlolineReportEntity } from './restaurant-information-in-aloline-report.entity/restaurant-information-in-aloline-report.entity';
export declare class RestaurantInformationInAlolineReportService {
    private restaurantVatReportEntity;
    spGetRpRestaurantInformationInAloline(restaurantId: number, _status: number, isOffice: number): Promise<RestaurantInformationInAlolineReportEntity>;
}
