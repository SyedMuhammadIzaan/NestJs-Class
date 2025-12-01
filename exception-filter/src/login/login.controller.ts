import { Controller, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('login')
@UseFilters(HttpExceptionFilter)
export class LoginController {

    @Post()
    login(){
        
    }
}
