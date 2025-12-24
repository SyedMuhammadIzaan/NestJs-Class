import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(employeeData: Partial<Employee>): Promise<Employee>;
    getAllEmployee(): Promise<Employee[]>;
    getEmployeeById(id: number): Promise<Employee>;
    updateEmployee(id: number, updatedData: Partial<Employee>): Promise<Employee>;
    delete(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteAll(): Promise<{
        success: boolean;
        message: string;
    }>;
}
