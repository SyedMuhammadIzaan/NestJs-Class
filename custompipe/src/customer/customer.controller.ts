/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerService } from './customer.service';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
// import { CustomerType } from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}

    @Post()
    addCustomer(@Body(new UppercasePipe()) customerDto:CustomerDto){
        return this.customerService.createCustomer(customerDto);
    }
    
    @Get()
    @UseGuards(AuthGuard)
    fetchCustomers(){
        return this.customerService.getAllCustomer();
    }
}
