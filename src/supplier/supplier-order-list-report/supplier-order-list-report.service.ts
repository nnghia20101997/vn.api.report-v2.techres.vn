import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierOrderListReportEntity } from './supplier-order-list-report.entity/supplier-order-list-report.entity';

@Injectable()
export class SupplierOrderListReportService {
    constructor(
        @InjectRepository(SupplierOrderListReportEntity)
        private supplierOrderListReport: Repository<SupplierOrderListReportEntity>
    ){}

    
    
}
