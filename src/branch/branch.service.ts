import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { Repository } from 'typeorm';
import { BranchDataModel } from './branch.entity/branch.data.model.entity';

@Injectable()
export class BranchService {
    
    constructor(
        @InjectRepository(BranchDataModel)
        private branch: Repository<BranchDataModel>
    ) { }

     async getListBranch(restaurantId : number , restaurantBrandId : number, status : number , isOffice : number): Promise<BranchDataModel[]> {
        let branch = await this.branch.query('CALL sp_get_list_branch(?,?,?,?,@status, @message); SELECT @status AS status , @message AS message',
        [
            restaurantId,
            restaurantBrandId,
            status,
            isOffice
        ]);
        ExceptionStoreProcedure.validate(branch);
        let data : BranchDataModel[] = new StoreProcedureResult<BranchDataModel>().getResultList(branch)
        return data;
    }

    async getDetailBranch(id : number): Promise<BranchDataModel> {
        let branch = await this.branch.query('CALL sp_get_detail_branch(?,@status,@message); SELECT @status AS status , @message AS message',
        [
            id
        ]);
        ExceptionStoreProcedure.validate(branch);
        let data : BranchDataModel = new StoreProcedureResult<BranchDataModel>().getResultDetail(branch)
        return data;
    }

}
