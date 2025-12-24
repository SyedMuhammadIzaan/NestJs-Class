import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Post()
    async createEmployee(@Body() body: Partial<Employee>): Promise<Employee> {
        return this.employeeService.create(body);
    }

    @Get()
    async getEmployees(): Promise<Employee[]> {
        return this.employeeService.getAllEmployee();
    }

    @Get(':id')
    async getEmployee(@Param('id') id: number): Promise<Employee> {
        return this.employeeService.getEmployeeById(id);
    }

    @Put(':id')
    async updateEmployee(@Param('id') id: number, @Body() data: Partial<Employee>): Promise<Employee> {
        return this.employeeService.updateEmployee(id, data);
    }

    @Delete(':id')
    async removeEmployee(@Param('id') id: number): Promise<{ success: boolean, message: string }> {
        return this.employeeService.delete(id);
    }

    @Delete()
    async removeEmployees():Promise<{success:boolean,message:string}>{
        return this.employeeService.deleteAll()
    }
}
