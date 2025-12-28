import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { SupabaseAuthGuard } from 'src/auth/supabase-auth/supabase-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @UseGuards(SupabaseAuthGuard)
    @Post()
    async createUser(@Body() userData:Partial<User>):Promise<User>{
        return this.userService.create(userData);
    }
    
    @UseGuards(SupabaseAuthGuard)
    @Get()
    async getUsers():Promise<User[]>{
        return this.userService.getAll();
    }

}
