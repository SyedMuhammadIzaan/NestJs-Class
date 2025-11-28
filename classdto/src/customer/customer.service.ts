/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CustomerInterface } from './interface/customer.interface';
import { CustomerDto } from './dto/customer.dto';
import { randomUUID } from 'crypto';
@Injectable()
export class CustomerService {
  private customers: CustomerInterface[] = [];

  createCustomer(createCustomerDto: CustomerDto): CustomerInterface {
    const newCustomer: CustomerInterface = {
      id: randomUUID(),
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  getAllCustomer(): CustomerInterface[] {
    return this.customers;
  }
  updateCustomerById(id:string,data:CustomerDto):CustomerInterface{
    const fetchIndex=this.customers.findIndex((customer)=>customer.id === id );
    if(fetchIndex === -1){
        throw new Error('Customer not found');
    }
    this.customers[fetchIndex]={
        id,
        ...data
    }
    return this.customers[fetchIndex];
  }
}
