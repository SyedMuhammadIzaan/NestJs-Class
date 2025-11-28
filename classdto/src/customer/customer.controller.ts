/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}
    @Post()
    newCustomer(@Body() data:CustomerDto){
        return this.customerService.createCustomer(data);
    }

    @Get()
    getCustomers(){
        return this.customerService.getAllCustomer();
    }

    @Put(":id")
    updateCustomer(@Param("id") id:string,@Body() data:CustomerDto){
        return this.customerService.updateCustomerById(id,data);
    }
}
