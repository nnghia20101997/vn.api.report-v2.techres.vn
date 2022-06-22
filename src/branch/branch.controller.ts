import { Controller, Get, HttpStatus, Param, ParseIntPipe, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { BranchListDTO } from './branch.dto/branch.list.dto';
import { BranchDataModel } from './branch.entity/branch.data.model.entity';
import { BranchResponse } from './branch.response/branch.response';
import { Response } from 'express';
import { BranchService } from './branch.service';

@Controller('api/branch')
export class BranchController {
    constructor(
        private branchService: BranchService,
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getListRestaurant(@Query() branchListDTO : BranchListDTO, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let branch : BranchDataModel[] = await this.branchService.getListBranch(branchListDTO.restaurant_id,branchListDTO.restaurant_brand_id,branchListDTO.status,branchListDTO.is_office);
            response.setData(new BranchResponse().mapToList(branch));
            return res.status(HttpStatus.OK).send(response);
    }

    @Get("/:id")
    async getDetailBranch(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        let response: ResponseData = new ResponseData();
        let branch : BranchDataModel = await this.branchService.getDetailBranch(id);
            response.setData(new BranchResponse(branch));
            return res.status(HttpStatus.OK).send(response);
    }
}
