import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TypeUser } from "src/utils.common/utils.enum/utils.enum";
import { ExceptionResponseDetail } from "src/utils.common/utils.exception.common/utils.exception.common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    // private techresSalersService: TechresSalersService,
    // private adminService: AdminService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_TOKEN,
    });
  }

  // async validate(generateToken): Promise<TechresSaler | Admin> {
  //   console.log("generateToken", generateToken);

  //   let user: TechresSaler | Admin = null;

  //   if (generateToken.type_user == TypeUser.ADMIN) {
  //     user = await this.adminService.findOne(generateToken.user_id);
  //   } else {
  //     user = await this.techresSalersService.findOne(generateToken.user_id);
  //   }

    // if (!) {
    //   throw new UnauthorizedException(
    //     new ExceptionResponseDetail(
    //       HttpStatus.BAD_REQUEST,
    //       "Token không hợp lệ!"
    //     )
    //   );
    // }
    // user.type = generateToken.type_user
    // return user;
  }

