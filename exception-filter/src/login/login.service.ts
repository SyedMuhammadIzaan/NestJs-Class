/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { loginDto } from './dto/login.dto';
import { loginInterface } from './interface/login.interface';

@Injectable()
export class LoginService {
  private login: loginInterface[] = [];

  createLogin(data: loginDto): loginInterface {
    const newLogin = {
      id: randomUUID(),
      ...data,
    };
    this.login.push(newLogin);
    return newLogin;
  }

  getLoginDetails():loginInterface[]{
    return this.login;
  }
}
