import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { BranchDataModel } from './branch.entity/branch.data.model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BranchDataModel]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret : process.env.SECRET_TOKEN,
  }),
  BranchModule
],
  providers: [BranchService],
  controllers: [BranchController]
})
export class BranchModule {}

