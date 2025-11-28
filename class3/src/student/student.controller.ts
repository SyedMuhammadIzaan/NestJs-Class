import { Controller,Get } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getAllStudent() {
        return "Student Data Fetched Successfully";
    }
}
