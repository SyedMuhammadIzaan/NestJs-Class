/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get,UseFilters, BadRequestException } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';
import { loginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
@UseFilters(HttpExceptionFilter)
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() loginData: loginDto) {
    if (!loginData) {
      throw new BadRequestException('Invalid login data');
    }

    return this.loginService.createLogin(loginData);
  }
  
  @Get()
  getAllLoginDetail(){
    return this.loginService.getLoginDetails();
  }
  

}
