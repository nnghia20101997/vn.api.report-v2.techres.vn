import { Repository } from 'typeorm';
import { BranchDataModel } from './branch.entity/branch.data.model.entity';
export declare class BranchService {
    private branch;
    constructor(branch: Repository<BranchDataModel>);
    getListBranch(restaurantId: number, restaurantBrandId: number, status: number, isOffice: number): Promise<BranchDataModel[]>;
    getDetailBranch(id: number): Promise<BranchDataModel>;
}
