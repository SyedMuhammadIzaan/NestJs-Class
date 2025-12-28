import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from "jsonwebtoken";
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private configService:ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req=context.switchToHttp().getRequest<Request>();
    const authHeader=req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith("Bearer ")){
      throw new UnauthorizedException("No Token Provided");
    }
    console.log("Auth header",authHeader.split(" ")[1])
    const token=authHeader.split(" ")[1];
    if(!token){
      throw new UnauthorizedException("No Token Provided");
    }
    const jwtSecret=this.configService.get<string>('SUPABASE_JWT_SECRET');
    if(!jwtSecret){
      throw new UnauthorizedException("Secret Not Provided");
    }
    try {
      const decode=jwt.verify(token,jwtSecret);
      req['user']=decode;
      return true;
    } catch (error) {
      throw new UnauthorizedException("Invalid Token")
    }
  }
}
