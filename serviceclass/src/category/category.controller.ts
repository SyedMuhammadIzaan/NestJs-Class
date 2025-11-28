import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}

    @Get()
    getProducts(){
        return this.categoryService.getAllCategories();
    }

    @Get(":id")
    getProduct(@Param("id") id:string){
        return this.categoryService.getCategoryById(Number(id));
    }
}
