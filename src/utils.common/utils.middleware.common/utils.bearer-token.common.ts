import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { isRFC3339 } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { DecodeToken } from '../utils.decode-token.common/utils.decode-token.common';
import { DecodeBearerTokenInterFace } from '../utils.decode-token.common/utils.decode-token.interface.common';
import { TypeUser } from '../utils.enum/utils.enum';
import { ExceptionResponseDetail } from '../utils.exception.common/utils.exception.common';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {

 
  

  constructor(
  ) { }

  async use(req: Request, res: Response, next: NextFunction) {

    let bearerToken: string = req.headers.authorization;
    console.log(bearerToken)
    if (!bearerToken || bearerToken === '') {
      throw new HttpException(new ExceptionResponseDetail(HttpStatus.BAD_REQUEST, "Vui lòng truyền token"), HttpStatus.OK);
    }

 
    let decodeBearerTokenInterFace: DecodeBearerTokenInterFace = await new DecodeToken().verifyBearerToken(bearerToken, "1235sd-5656sdf-@dfkdf-sdsjfdj");
    next();
   
  }
}
