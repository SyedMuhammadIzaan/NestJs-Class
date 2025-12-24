"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("./employee.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
let EmployeeService = class EmployeeService {
    employeeRepository;
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(employeeData) {
        const employee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(employee);
    }
    async getAllEmployee() {
        return this.employeeRepository.find();
    }
    async getEmployeeById(id) {
        const employee = await this.employeeRepository.findOneBy({ id });
        console.log("Employee", employee);
        if (!employee) {
            throw new common_1.NotFoundException(`Employee not Found by ${id}`);
        }
        return employee;
    }
    async updateEmployee(id, updatedData) {
        const employee = await this.employeeRepository.findOneBy({ id });
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ${id} Not found`);
        }
        console.log("Employee", employee);
        const updatedEmployeeData = Object.assign(employee, updatedData);
        return this.employeeRepository.save(updatedEmployeeData);
    }
    async delete(id) {
        if (!id) {
            throw new rxjs_1.NotFoundError(`Cannot Deleted the Employee`);
        }
        const removeEmployee = await this.employeeRepository.delete({ id });
        if (!removeEmployee)
            throw new common_1.NotFoundException(`Employee can't found`);
        return { success: true, message: "Successfully Deleted Employee" };
    }
    async deleteAll() {
        const result = await this.employeeRepository.deleteAll();
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Something went Wrong`);
        return { success: true, message: "All Employee Successfully Deleted" };
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map