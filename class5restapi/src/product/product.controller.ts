/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
    
    //Get All Products
    @Get()
    getProducts(){
        return this.productService.getAllProduct();
    }

    //Get Single Product
    @Get(":id")
    getProduct(@Param("id") id:string){
        return this.productService.getProductById(id);
    }

    //Create Product
    @Post()
    makeProduct(@Body() body:{name:string;price:number}){
        return this.productService.createProduct(body);
    }

    //Update All Product
    @Put(":id")
    updateProduct(@Param("id") id:string, @Body() body:{name:string;price:number}){
        return this.productService.updateProduct(id,body);
    }

    //Update Partial Product
    @Patch(":id")
    partialUpdateProduct(@Param("id") id:string, @Body() body: Partial<{name:string;price:number}>){
        return this.productService.updatePartialProduct(id,body);
    }

    //Delete Product
    @Delete(":id")
    deleteProduct(@Param("id") id:string){
        return this.productService.deleteProductById(id);
    }

}
