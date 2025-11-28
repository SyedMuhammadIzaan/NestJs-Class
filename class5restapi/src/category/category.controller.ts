/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService) { }

    getAll(){
        return this.categoryService.getAllCategories();
    }
    getById(id:string){
        return this.categoryService.getCategoryById(id);
    }
    newCategory(data:{name:string}){
        return this.categoryService.createCategory(data);
    }
    updateCategory(id:string,data:{name:string}){
        return this.categoryService.updateCategoryById(id,data);
    }
    updatePartialCategory(id:string,data:{name:string}){
        return this.categoryService.updatePartialCategoryById(id,data);
    }
    deleteCategory(id:string){
        return this.categoryService.deleteCategoryById(id);
    }
}
