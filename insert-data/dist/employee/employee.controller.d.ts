import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(body: Partial<Employee>): Promise<Employee>;
    getEmployees(): Promise<Employee[]>;
    getEmployee(id: number): Promise<Employee>;
    updateEmployee(id: number, data: Partial<Employee>): Promise<Employee>;
    removeEmployee(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    removeEmployees(): Promise<{
        success: boolean;
        message: string;
    }>;
}
