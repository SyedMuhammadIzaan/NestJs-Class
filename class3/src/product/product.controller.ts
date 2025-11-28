import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    getAllProduct(){
        return "Product Data Fetched Successfully";
    }
}

