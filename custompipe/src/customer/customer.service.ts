/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CustomerType } from './interface/customer.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class CustomerService {
  private customers: CustomerType[] = [];

  createCustomer(customerData): CustomerType {
    const customer = {
      id: randomUUID(),
      ...customerData,
    };
    this.customers.push(customer);
    return customer;
  }

  getAllCustomer(): CustomerType[] {
    return this.customers;
  }
}
