import { BranchListDTO } from './branch.dto/branch.list.dto';
import { Response } from 'express';
import { BranchService } from './branch.service';
export declare class BranchController {
    private branchService;
    constructor(branchService: BranchService);
    getListRestaurant(branchListDTO: BranchListDTO, res: Response): Promise<any>;
    getDetailBranch(id: number, res: Response): Promise<any>;
}
