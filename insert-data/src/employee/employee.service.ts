import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository:Repository<Employee>
    ){}

    async create(employeeData:Partial<Employee>):Promise<Employee>{
        const employee=this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(employee)
    }

    async getAllEmployee():Promise<Employee[]>{
        return this.employeeRepository.find();
    }

    async getEmployeeById(id:number):Promise<Employee>{
        const employee=await this.employeeRepository.findOneBy({id})
        console.log("Employee",employee);
        if(!employee){
            throw new NotFoundException(`Employee not Found by ${id}`);
        }
        return employee;
    }

    async updateEmployee(id:number,updatedData:Partial<Employee>):Promise<Employee>{
        const employee=await this.employeeRepository.findOneBy({id})
        if(!employee){
            throw new NotFoundException(`Employee with ${id} Not found`)
        }
        console.log("Employee",employee);
        const updatedEmployeeData=Object.assign(employee,updatedData)
        return this.employeeRepository.save(updatedEmployeeData);
    }

    async delete(id:number):Promise<{success:boolean,message:string}>{
        if(!id){
            throw new NotFoundError(`Cannot Deleted the Employee`)
        }
        const removeEmployee=await this.employeeRepository.delete({id})
        if(!removeEmployee) throw new NotFoundException(`Employee can't found`);
        return {success:true,message:"Successfully Deleted Employee"};
    }

    async deleteAll():Promise<{success:boolean,message:string}>{
        const result=await this.employeeRepository.deleteAll();
        if(result.affected === 0) throw new NotFoundException(`Something went Wrong`);
        return {success:true,message:"All Employee Successfully Deleted"}; 
        
    }
}   
