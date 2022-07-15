import { TmsRestaurantDebtReportEntity } from "../tms-restaurant-debt-report.entity/tms-restaurant-debt-report.entity";

export class TmsRestaurantDebtReportResponse {
   
    count: number;

    total_amount: number;

    waiting_payment_count: number;

    waiting_payment_amount: number;

    paid_count: number;

    paid_amount: number;

    debt_count: number;

    debt_amount: number;

    return_count: number;

    total_return_amount: number;

    constructor(baseEntity?: TmsRestaurantDebtReportEntity) {
        this.count = baseEntity? +baseEntity.count : 0;
        this.total_amount = baseEntity? +baseEntity.total_amount : 0;
        this.waiting_payment_count = baseEntity? +baseEntity.waiting_payment_count : 0;
        this.waiting_payment_amount = baseEntity? +baseEntity.waiting_payment_amount : 0;
        this.paid_count = baseEntity? +baseEntity.paid_count : 0;
        this.paid_amount = baseEntity? +baseEntity.paid_amount : 0;
        this.debt_count = baseEntity? +baseEntity.debt_count : 0;
        this.debt_amount = baseEntity? +baseEntity.debt_amount : 0;
        this.return_count = baseEntity? +baseEntity.return_count : 0;
        this.total_return_amount = baseEntity? +baseEntity.total_return_amount : 0;
    }

    public mapTolist(baseEntities: TmsRestaurantDebtReportEntity[]): TmsRestaurantDebtReportResponse[] {
        let data: TmsRestaurantDebtReportResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new TmsRestaurantDebtReportResponse(e))
        })
        return data;
    }
}