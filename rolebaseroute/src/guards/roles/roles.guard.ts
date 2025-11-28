/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles_Key } from './roles.decorator';
import { Role } from './roles.enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(Roles_Key, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('Required Roles', requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    const request = context
      .switchToHttp()
      .getRequest<{ headers: Record<string, string> }>();
    // console.log('Request', request);
    const userRole = request.headers['xyz-role'] as Role;
    // console.log('User Role', userRole);
    return requiredRoles.includes(userRole);
  }
}
